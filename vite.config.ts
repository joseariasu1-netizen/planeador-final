import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { GoogleGenAI } from '@google/genai';

function geminiApiPlugin(): Plugin {
  return {
    name: 'gemini-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/gemini/generate', async (req, res, next) => {
        if (req.method !== 'POST') return next();

        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
          try {
            const { prompt, systemInstruction, responseMimeType, userApiKey } = JSON.parse(body || '{}');
            const apiKey = userApiKey || process.env.GEMINI_API_KEY;

            if (!apiKey) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                error: 'No hay clave de API de Gemini configurada. Por favor ingresa tu API Key en la barra superior.'
              }));
              return;
            }

            const ai = new GoogleGenAI({
              apiKey,
              httpOptions: {
                headers: { 'User-Agent': 'aistudio-build' }
              }
            });

            const config: any = {};
            if (systemInstruction) config.systemInstruction = systemInstruction;
            if (responseMimeType) config.responseMimeType = responseMimeType;

            const response = await ai.models.generateContent({
              model: 'gemini-3.6-flash',
              contents: prompt,
              config: Object.keys(config).length > 0 ? config : undefined,
            });

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ text: response.text }));
          } catch (error: any) {
            console.error('Error en Vite Plugin Gemini:', error);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: error.message || 'Error al generar contenido con Gemini' }));
          }
        });
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), geminiApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
