
import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingStrategy = async (businessName: string, businessType: string): Promise<StrategyResponse | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a social media marketing strategy for a business named "${businessName}" which is a "${businessType}". Focus on Facebook and Instagram for the Singapore market. Use a witty and energetic tone consistent with an agency called "Monkey Business".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            targetAudience: { type: Type.STRING },
            contentThemes: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestedPosts: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  topic: { type: Type.STRING },
                  description: { type: Type.STRING }
                },
                required: ["topic", "description"]
              }
            },
            growthStrategy: { type: Type.STRING }
          },
          required: ["targetAudience", "contentThemes", "suggestedPosts", "growthStrategy"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as StrategyResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
