// import fetch from "node-fetch";
// import dotenv from "dotenv";
// dotenv.config();

// const GROQ_API_KEY = process.env.GROQ_API_KEY;

// // Critical symptoms
// const dangerKeywords = [
//   "chest pain",
//   "shortness of breath",
//   "breathlessness",
//   "severe bleeding",
//   "unconscious",
//   "heart attack",
//   "stroke",
//   "seizure",
//   "difficulty breathing",
//   "extreme pain",
//   "loss of consciousness",
//   "sudden confusion",
//   "slurred speech",
//   "numbness on one side",
//   "difficulty speaking",
//   "severe headache",
//   "vision loss",
//   "persistent vomiting",
//   "bleeding from mouth or nose",
//   "severe abdominal pain",
//   "high fever",
//   "severe allergic reaction",
//   "swelling of face or throat",
//   "blue lips or face",
//   "no pulse",
//   "not breathing",
//   "sudden collapse",
//   "severe burns",
//   "deep wound",
//   "severe trauma",
//   "electric shock",
//   "poisoning",
//   "difficulty walking",
//   "rapid heartbeat",
//   "severe back pain",
//   "intense dizziness"
// ];

// // Common symptoms
// const normalKeywords = [
//   "head cold",
//   "stuffy nose",
//   "sore muscles",
//   "chills",
//   "sneezing",
//   "coughing",
//   "runny nose",
//   "sore throat",
//   "fatigue",
//   "muscle ache",
//   "joint pain",
//   "feeling unwell",
//   "feeling sick",
//   "feeling tired",
//   "feeling weak",
//   "pain",
//   "cough",
//   "cold",
//   "fever",
//   "headache",
//   "nausea",
//   "vomiting",
//   "runny nose",
//   "sore throat",
//   "tiredness",
//   "fatigue",
//   "body ache",
//   "mild pain",
//   "diarrhea",
//   "rash",
//   "dizziness",
//   "sneezing"
// ];

// // Check for critical danger
// function isDangerous(message) {
//   return dangerKeywords.some(keyword =>
//     message.toLowerCase().includes(keyword)
//   );
// }

// // Check for general (non-dangerous) symptoms
// function isNormalSymptom(message) {
//   return normalKeywords.some(keyword =>
//     message.toLowerCase().includes(keyword)
//   );
// }

// export const chatbotController = async (req, res) => {
//   const { message } = req.body;

//   if (!message) {
//     return res.status(400).json({ error: "Message is required." });
//   }

//   const lowerMessage = message.toLowerCase();
//   const isDanger = isDangerous(lowerMessage);
//   const isNormal = isNormalSymptom(lowerMessage);

//   const isSymptom = isDanger || isNormal;

//   const prompt = isSymptom
//   ? `
// You are a clinical health assistant. Analyze the symptoms: "${message}".

// Respond in this JSON format only:
// {
//   "specialist": "e.g. Cardiologist",
//   "appointment": "YYYY-MM-DD HH:MM",
//   "recommendation": "Brief reasoning for this referral",
//   "urgency": "low | medium | high"
// }
// `
//   : `
// You are MediAlertBot, a health assistant AI. The user said: "${message}". Provide a friendly response.
// `;


//   try {
//     const fetchResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${GROQ_API_KEY}`,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         model: "meta-llama/llama-4-scout-17b-16e-instruct",
//         messages: [{ role: "user", content: prompt }],
//         temperature: 0.5,
//         max_tokens: 300
//       })
//     });

//     if (!fetchResponse.ok) {
//       const errorData = await fetchResponse.json();
//       console.error("Groq API Error:", errorData);
//       return res.status(500).json({ error: "Failed to get AI response from Groq." });
//     }

//     const data = await fetchResponse.json();
//     const aiResponse = data.choices[0].message.content;

//     const result = {
//       aiResponse,
//       type: isDanger ? "critical" : isNormal ? "medical" : "chat",
//       alertLevel: "none",
//       alert: null,
//       redirect: null
//     };

//     if (isDanger) {
//       result.alertLevel = "high";
//       result.alert = "DANGEROUS SYMPTOMS DETECTED. IMMEDIATE ACTION REQUIRED.";
//       result.redirect = "https://medialert-dashboard.onrender.com/login";
//     }

//     res.json(result);
//   } catch (error) {
//     console.error("Chatbot Error:", error.message);
//     res.status(500).json({ error: "Internal server error while processing chatbot request." });
//   }
// };









import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const GROQ_API_KEY = process.env.GROQ_API_KEY;

// Critical symptoms
const dangerKeywords = [
  "chest pain", "shortness of breath", "breathlessness", "severe bleeding", "unconscious",
  "heart attack", "stroke", "seizure", "difficulty breathing", "extreme pain",
  "loss of consciousness", "sudden confusion", "slurred speech", "numbness on one side",
  "difficulty speaking", "severe headache", "vision loss", "persistent vomiting",
  "bleeding from mouth or nose", "severe abdominal pain", "high fever",
  "severe allergic reaction", "swelling of face or throat", "blue lips or face",
  "no pulse", "not breathing", "sudden collapse", "severe burns", "deep wound",
  "severe trauma", "electric shock", "poisoning", "difficulty walking",
  "rapid heartbeat", "severe back pain", "intense dizziness"
];

// Common symptoms
const normalKeywords = [
  "head cold", "stuffy nose", "sore muscles", "chills", "sneezing", "coughing",
  "runny nose", "sore throat", "fatigue", "muscle ache", "joint pain", "feeling unwell",
  "feeling sick", "feeling tired", "feeling weak", "pain", "cough", "cold", "fever",
  "headache", "nausea", "vomiting", "runny nose", "sore throat", "tiredness",
  "fatigue", "body ache", "mild pain", "diarrhea", "rash", "dizziness", "sneezing"
];

function isDangerous(message) {
  return dangerKeywords.some(keyword => message.toLowerCase().includes(keyword));
}

function isNormalSymptom(message) {
  return normalKeywords.some(keyword => message.toLowerCase().includes(keyword));
}

export const chatbotController = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  const lowerMessage = message.toLowerCase();
  const isDanger = isDangerous(lowerMessage);
  const isNormal = isNormalSymptom(lowerMessage);
  const isSymptom = isDanger || isNormal;

  const prompt = isSymptom
    ? `
You are a clinical health assistant. Analyze the symptoms: "${message}".

Respond in this JSON format only:
{
  "specialist": "e.g. Cardiologist",
  "appointment": "YYYY-MM-DD HH:MM",
  "recommendation": "Brief reasoning for this referral",
  "urgency": "low | medium | high"
}
`
    : `
You are MediAlertBot, a health assistant AI. The user said: "${message}". Provide a friendly response.
`;

  try {
    const fetchResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.5,
        max_tokens: 300
      })
    });

    const data = await fetchResponse.json(); // ✅ Only called once

    if (!fetchResponse.ok) {
      console.error("❌ Groq API Error:", data);
      return res.status(500).json({ error: "Failed to get AI response from Groq." });
    }

    const aiResponse = data.choices?.[0]?.message?.content || "Sorry, I couldn't understand that.";

    const result = {
      aiResponse,
      type: isDanger ? "critical" : isNormal ? "medical" : "chat",
      alertLevel: isDanger ? "high" : "none",
      alert: isDanger ? "DANGEROUS SYMPTOMS DETECTED. IMMEDIATE ACTION REQUIRED." : null,
      redirect: isDanger ? "https://medialert-dashboard.onrender.com/login" : null
    };

    res.json(result);
  } catch (error) {
    console.error("❌ Chatbot Error:", error.message);
    res.status(500).json({ error: "Internal server error while processing chatbot request." });
  }
};
