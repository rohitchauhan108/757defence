import { GoogleGenAI } from "@google/genai";

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, practiceArea } = body || {};

    if (!message) {
      return Response.json({ error: "Message is required." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({
        reply: "Welcome to 757 Defense AI Legal Advisor. Our primary AI key is being configured. Meanwhile, our Virginia defense team is available 24/7 at (757) 757-3333 for an immediate free case consultation.",
        isFallback: true
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemPrompt = `You are the 757 Defense AI Legal Advisor, an intelligent virtual legal intake assistant for 757 Defense Law Firm serving Virginia Beach, Norfolk, Chesapeake, and Hampton Roads, Virginia.
Your purpose is to answer criminal defense, DUI, reckless driving, domestic violence, drug crime, and military UCMJ inquiries with clear, professional, empathetic, and accurate informational advice based on Virginia law (Virginia Code).
Always include a clear legal disclaimer that your answers are for informational purposes only and do not constitute formal attorney-client privilege until a retainer is signed.
Guide the user to book a Free Case Evaluation or call our 24/7 Hotline at (757) 757-3333 with 757 Defense attorneys for formal representation.
Keep responses concise, well-structured with bullet points where appropriate, and reassuring.`;

    const promptText = `${systemPrompt}\n\nSelected Context/Practice Area: ${practiceArea || "General Defense Query"}\n\nUser Question: ${message}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptText,
    });

    const reply = response.text || "Thank you for reaching out to 757 Defense. Please contact our senior criminal partners directly at (757) 757-3333 to discuss your charges in complete confidence.";

    return Response.json({ reply });
  } catch (error) {
    console.error("Next.js Legal Advisor API Error:", error);
    return Response.json({
      reply: "Thank you for reaching out to 757 Defense. Our senior attorneys are available 24/7 to evaluate your case personally. Call us immediately at (757) 757-3333 or schedule a free online case review.",
      error: error.message
    }, { status: 500 });
  }
}
