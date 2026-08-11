import { GoogleGenAI } from "@google/genai";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
app.use(express.json({ limit: "10mb" }));

const getAiClient = (userApiKey?: string) => {
  const key = userApiKey || process.env.GEMINI_API_KEY;
  if (!key) return null;
  return new GoogleGenAI({
    apiKey: key,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

app.post("/api/gemini/generate", async (req, res) => {
  try {
    const { prompt, systemInstruction, userApiKey } = req.body;
    const ai = getAiClient(userApiKey);
    if (!ai) {
      return res.status(400).json({
        error: "No hay clave de API de Gemini configurada. Ingresa tu API Key en la barra superior morada o configúrala en las variables de entorno."
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: systemInstruction ? { systemInstruction } : undefined,
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error en API Gemini:", error);
    res.status(500).json({ error: error.message || "Error al generar contenido con Gemini AI" });
  }
});

app.post("/api/gemini/voice-call", async (req, res) => {
  try {
    const { prompt, persona, userApiKey } = req.body;
    const ai = getAiClient(userApiKey);
    if (!ai) {
      return res.status(400).json({
        error: "No hay clave de API de Gemini configurada. Ingresa tu API Key en la barra superior morada."
      });
    }

    const personaInstructions: Record<string, string> = {
      tutor: `Eres la Profesor Jose David, habla en asento paisa masculino, tutor experto en pedagogía DUA y Matemáticas de la Institución Educativa Rafael Uribe Uribe de Medellín (Comuna 12).
Hablas de manera natural, cercana, profesional y concisa por llamada telefónica.
Conoces a detalle las mallas curriculares de 1° a 11°. Recuerda que en 10° y 11° Estadística no es una materia separada sino que está integrada a Matemáticas. En 11°, las Pruebas SABER 11 son a mediados del Periodo 2. El año escolar tiene 40 semanas (P1 13 sem, P2 13 sem, P3 14 sem).
REGLA CRÍTICA OBLIGATORIA: NUNCA uses notación ni expresiones en LaTeX (NO utilices \\frac, \\sqrt, \\begin, $, $$). Escribe todas las fórmulas en texto plano legible con caracteres Unicode estándar (por ejemplo: x², √x, a / b, ×, ÷, ±, π).
Proporciona respuestas concisas de 2 a 4 oraciones aptas para ser escuchadas por voz.`,

      coordinador: `Eres el Coordinador Edgar de la I.E. Rafael Uribe Uribe de Medellín.
Atiendes llamadas institucionales sobre el calendario escolar (40 semanas en total: Periodo 1 con 13 sem, Periodo 2 con 13 sem y Periodo 3 con 14 sem), Pruebas SABER 11 (presentadas a mediados del Periodo 2 por grado 11°), mallas curriculares e inclusión DUA.
En 10° y 11° Estadística está totalmente integrada en Matemáticas.
REGLA CRÍTICA OBLIGATORIA: NUNCA uses notación LaTeX (sin \\frac, \\sqrt, $, $$). Mantén un tono institucional formal, acogedor, claro y sintético para ser escuchado en una llamada de voz.`,

      secretaria: `Eres la Secretaria Académica de la I.E. Rafael Uribe Uribe de Medellín.
Respondes dudas sobre asignaturas, mallas curriculares, certificados y normativas escolares de la comuna 12.
REGLA CRÍTICA OBLIGATORIA: NUNCA uses notación LaTeX. Expresa todo en lenguaje claro y hablado.`
    };

    const sysInstruction = personaInstructions[persona] || personaInstructions.tutor;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction: sysInstruction,
      },
    });

    const replyText = response.text || "Disculpa, ¿podrías repetirme la pregunta?";

    let audioBase64: string | undefined = undefined;
    try {
      const ttsResponse = await ai.models.generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [{ parts: [{ text: replyText }] }],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: persona === "coordinador" ? "Puck" : "Kore" },
            },
          },
        },
      });
      audioBase64 = ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    } catch (ttsErr) {
      // Fallback a reproducción en navegador por Web Speech API
    }

    res.json({ text: replyText, audioBase64 });
  } catch (error: any) {
    console.error("Error en voice-call:", error);
    res.status(500).json({ error: error.message || "Error al procesar llamada telefónica IA" });
  }
});

async function startServer() {
  const PORT = 3000;

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server corriendo en http://0.0.0.0:${PORT}`);
  });
}

startServer();
