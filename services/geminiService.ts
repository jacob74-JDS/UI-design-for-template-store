
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateDesignIdea = async (prompt: string): Promise<string> => {
    if (!API_KEY) {
        return "Error: Gemini API key is not configured. Please set the API_KEY environment variable.";
    }
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `As an expert UI/UX designer, describe a unique and compelling UI design concept based on the following user idea. Focus on layout, color palette, typography, and key interactive elements. User idea: "${prompt}"`,
        config: {
            temperature: 0.7,
            topP: 1,
            topK: 1,
            maxOutputTokens: 512,
        },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating design idea:", error);
    return "Sorry, I couldn't generate an idea at the moment. Please try again later.";
  }
};
