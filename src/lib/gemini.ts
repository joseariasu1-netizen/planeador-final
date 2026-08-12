import { GoogleGenAI } from '@google/genai';

interface GeminiGenerateOptions {
  prompt: string;
  systemInstruction?: string;
  responseMimeType?: string;
  userApiKey?: string;
}

export async function callGemini({
  prompt,
  systemInstruction,
  responseMimeType,
  userApiKey
}: GeminiGenerateOptions): Promise<string> {
  // 1. Intentar primero a través de la API Backend /api/gemini/generate
  try {
    const res = await fetch('/api/gemini/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        systemInstruction,
        responseMimeType,
        userApiKey: userApiKey || undefined,
      }),
    });

    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      if (data.text) {
        return data.text;
      }
    }
    
    // Si res no es ok pero devolvió JSON con error, lanzar ese error
    if (!res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    }
  } catch (err: any) {
    // Si el error es explícito de la API (ej. sin clave), relanzarlo
    if (err.message && err.message.includes('No hay clave de API')) {
      throw err;
    }
    console.warn("Fallo al contactar /api/gemini/generate, probando cliente directo:", err);
  }

  // 2. Fallback de cliente directo en navegador
  const apiKey = userApiKey || (import.meta as any).env?.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('No hay clave de API de Gemini configurada. Ingresa tu API Key en la barra superior o configúrala en el entorno.');
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const config: any = {};
    if (systemInstruction) config.systemInstruction = systemInstruction;
    if (responseMimeType) config.responseMimeType = responseMimeType;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: Object.keys(config).length > 0 ? config : undefined,
    });

    if (!response.text) {
      throw new Error('La respuesta de Gemini vino vacía.');
    }

    return response.text;
  } catch (clientErr: any) {
    console.error("Error en cliente directo Gemini:", clientErr);
    throw new Error(clientErr.message || 'Error al comunicarse con Gemini AI');
  }
}
