
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTaxAdvice = async (userQuestion: string) => {
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

export const estimatePropertySavings = async (address: string, role: 'owner' | 'renter' | 'explorer' = 'owner') => {
  let prompt = "";
  
  if (role === 'owner') {
    prompt = `Based on the Texas address "${address}", act as a high-end real estate data provider. Provide:
    1. Financials: marketValue, assessedValue, totalTaxBill, estimatedSavings.
    2. Safety: crimeScore (1-100), safetyReport (summary string), offenderCount (number), neighborhoodSafetyRating (string).
    3. Offender Locations: A few mock nearby locations (latitude/longitude offset from center).
    Format as JSON.`;
  } else if (role === 'renter') {
    prompt = `Based on the Texas address "${address}", provide info for a RENTER. 
    Estimate potential utility savings and safety statistics for the neighborhood.
    Format as JSON.`;
  } else {
    prompt = `Based on the Texas address "${address}", provide general neighborhood safety and market trends.
    Format as JSON.`;
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          marketValue: { type: Type.NUMBER },
          assessedValue: { type: Type.NUMBER },
          totalTaxBill: { type: Type.NUMBER },
          estimatedSavings: { type: Type.NUMBER },
          protestLikelihood: { type: Type.STRING },
          analysis: { type: Type.STRING },
          safety: {
            type: Type.OBJECT,
            properties: {
              crimeScore: { type: Type.NUMBER },
              safetyReport: { type: Type.STRING },
              offenderCount: { type: Type.NUMBER },
              neighborhoodSafetyRating: { type: Type.STRING }
            },
            required: ["crimeScore", "safetyReport", "offenderCount", "neighborhoodSafetyRating"]
          }
        },
        required: ["marketValue", "assessedValue", "totalTaxBill", "estimatedSavings", "protestLikelihood", "analysis", "safety"]
      }
    }
  });
  
  try {
    const jsonStr = response.text?.trim() || "";
    return JSON.parse(jsonStr);
  } catch (e) {
    // Fallback data
    return {
      marketValue: 450000,
      assessedValue: 442000,
      totalTaxBill: 9800,
      estimatedSavings: role === 'owner' ? 1200 : 300,
      protestLikelihood: role === 'owner' ? 'High' : 'N/A',
      analysis: "High appreciation in this district suggests a strong case for assessment reduction based on equity comps.",
      safety: {
        crimeScore: 82,
        safetyReport: "Generally safe neighborhood with low violent crime rates. Occasional property theft reported nearby.",
        offenderCount: 3,
        neighborhoodSafetyRating: "A-"
      }
    };
  }
};
