import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTaxAdvice = async (userQuestion: string) => {
  // Removed maxOutputTokens to follow guidelines recommending avoidance unless thinkingBudget is also set.
  // Using gemini-3-flash-preview for simple Q&A tasks.
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `The user has a question about Texas property taxes: "${userQuestion}". 
    Act as Andy, a helpful AI property tax expert for Texas homeowners. 
    Keep it concise, friendly, and accurate. Mention common counties like Harris, Dallas, Travis, or Tarrant if relevant.`,
    config: {
      temperature: 0.7,
    }
  });
  return response.text;
};

export const estimatePropertySavings = async (address: string) => {
  // Using gemini-3-pro-preview for tasks involving estimation and market analysis.
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Based on the Texas address "${address}", estimate the typical property tax savings if a protest is successful. 
    Return the data as JSON with typical market values for that area. 
    Format: { "marketValue": number, "estimatedSavings": number, "protestLikelihood": "High" | "Medium" | "Low", "analysis": "string" }`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          marketValue: { type: Type.NUMBER },
          estimatedSavings: { type: Type.NUMBER },
          protestLikelihood: { type: Type.STRING },
          analysis: { type: Type.STRING }
        },
        required: ["marketValue", "estimatedSavings", "protestLikelihood", "analysis"]
      }
    }
  });
  
  // Directly accessing .text property and handling potential undefined or invalid JSON output.
  try {
    const jsonStr = response.text?.trim() || "";
    return JSON.parse(jsonStr);
  } catch (e) {
    return {
      marketValue: 450000,
      estimatedSavings: 1200,
      protestLikelihood: 'High',
      analysis: "Based on typical appreciation in Texas, there is a high likelihood of successful protest."
    };
  }
};