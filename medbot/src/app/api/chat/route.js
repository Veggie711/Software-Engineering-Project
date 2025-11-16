import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  vertexai: false,
});

export async function POST(req) {
  const { question, context } = await req.json();

  const prompt = `
    You are a medical chatbot. Answer based on X-ray context.
    Context: ${JSON.stringify(context)}
    Question: ${question}
    Answer:
  `;

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        { role: "user", parts: [{ text: prompt }] }
      ],
    });

    const text = response.text;  // extract final text

    return new Response(JSON.stringify({ answer: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error generating content:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate content" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
