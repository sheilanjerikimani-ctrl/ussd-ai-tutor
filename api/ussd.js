export default async function handler(req, res) {
  const { sessionId, phoneNumber, text } = req.body;

  let response = "";
  const parts = (text || "").split("*");
  const level = parts.length;
  const lastInput = parts[parts.length - 1];

  try {
    if (text === "") {
      // Level 0: main menu
      response = `CON Welcome to Msaidizi!
1. Ask a Question
2. Practice Quiz
3. Study Plan`;
    } else if (parts[0] === "1" && level === 1) {
      // User picked "Ask a Question" - ask them to type it
      response = `CON Type your subject and question.
e.g. Biology: why do cells divide?`;
    } else if (parts[0] === "1" && level === 2) {
      // They typed their question - call the AI
      const question = lastInput;
      const answer = await askTutor(question);
      response = `END ${answer}`;
    } else if (parts[0] === "2" && level === 1) {
      response = `CON Which subject for your quiz?
1. Biology
2. Math
3. English`;
    } else if (parts[0] === "2" && level === 2) {
      const subject = { "1": "Biology", "2": "Math", "3": "English" }[lastInput] || "General";
      const question = await askTutor(`Generate one short multiple-choice practice question on ${subject} for a Kenyan secondary school student. Format as: Q, then A) B) C) D) options. Do not reveal the answer.`);
      response = `END ${question}`;
    } else if (parts[0] === "3" && level === 1) {
      response = `CON List your subjects and hours/day.
e.g. Math Biology English, 2hrs`;
    } else if (parts[0] === "3" && level === 2) {
      const plan = await askTutor(`Create a short weekly study plan for: ${lastInput}. Keep it under 300 characters total.`);
      response = `END ${plan}`;
    } else {
      response = `END Sorry, invalid option. Dial again to restart.`;
    }
  } catch (err) {
    console.error(err);
    response = `END Sorry, something went wrong. Please try again shortly.`;
  }

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(response);
}


async function askTutor(userInput) {
  const systemPrompt = `You are Msaidizi, a study assistant for Kenyan secondary school students on USSD.
Explain clearly in plain language, under 300 characters total, no Markdown, no asterisks.
Only discuss academic subjects (Math, Sciences, English, Kiswahili, Humanities).
Do not give exam answers if the student says they are in an exam.
If unsure, say so plainly rather than guessing.`;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${systemPrompt}\n\nStudent question: ${userInput}` }] }]
      })
    }
  );

  const data = await response.json();
  let text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get an answer right now.";
  if (text.length > 320) text = text.slice(0, 317) + "...";
  return text;
} 