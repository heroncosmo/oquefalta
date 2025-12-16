import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client conditionally to avoid errors if key is missing during render (though it should be there)
const getAiClient = () => {
  if (!apiKey) {
    console.warn("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getRelationshipAdvice = async (query: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "Desculpe, não consigo fornecer conselhos no momento. Por favor, verifique a configuração.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: "Você é um conselheiro de relacionamentos empático, profissional e sábio para um site brasileiro chamado 'O que falta dizer'. Seu objetivo é fornecer conselhos breves, esperançosos e práticos para casais. Não substitua a terapia profissional, mas ofereça encorajamento e primeiros passos. Mantenha as respostas com menos de 150 palavras. Tom: Caloroso, compreensivo, sem julgamentos. Idioma: Português do Brasil.",
      }
    });
    
    return response.text || "Não foi possível gerar uma resposta. Por favor, tente novamente.";
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Ocorreu um erro ao conectar com o conselheiro. Por favor, tente novamente mais tarde.";
  }
};