import "dotenv/config";
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
    const { prompt, systemInstruction, responseMimeType, userApiKey } = req.body;
    const ai = getAiClient(userApiKey);
    if (!ai) {
      return res.status(400).json({
        error: "No hay clave de API de Gemini configurada. Ingresa tu API Key en la barra superior morada o configúrala en las variables de entorno."
      });
    }

    const config: any = {};
    if (systemInstruction) config.systemInstruction = systemInstruction;
    if (responseMimeType) config.responseMimeType = responseMimeType;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: Object.keys(config).length > 0 ? config : undefined,
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error en API Gemini:", error);
    res.status(500).json({ error: error.message || "Error al generar contenido con Gemini AI" });
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
