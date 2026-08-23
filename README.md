# Msaidizi — AI USSD Study Assistant

**Programme:** AnalystLab Africa — Generative AI Internship
**Week 3:** Building an AI Assistant with Prompt Engineering & Knowledge Design
**Author:** Sheila Kimani

## What This Is

Msaidizi is an AI-powered study assistant for Kenyan secondary school students, delivered entirely over USSD — meaning it works on any basic feature phone with zero internet connection and zero app installation.

## The Problem It Solves

Students in rural and low-income areas often lack access to a tutor and rely on feature phones rather than smartphones. Existing USSD education tools in this space (e.g. Eneza Education / Shupavu291) are largely static, menu-driven systems with pre-written content. Msaidizi is different: it's powered by a real LLM, so students can ask genuine questions in their own words and get an adapted, real-time explanation — not just navigate a fixed menu.

## Features

- **Ask a Question** — free-text academic questions answered in plain language
- **Practice Quiz** — short multiple-choice questions generated per subject
- **Study Plan** — a simple weekly revision plan based on the student's subjects and available time

## How It Works

Africa's Talking sends an HTTP POST request to this app's webhook (`/api/ussd`) every time a user interacts with the USSD menu. The backend tracks where the user is in the conversation using the cumulative `text` parameter USSD provides, and calls the Mistral AI API to generate responses for open-ended questions, quizzes, and study plans — all trimmed to fit USSD's character and formatting constraints.

## Tech Stack

- Backend: Node.js (Vercel serverless function)
- LLM Provider: Mistral AI (`mistral-large-latest`)
- USSD Gateway: Africa's Talking (Sandbox)
- Hosting: Vercel

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/sheilanjerikimani-ctrl/ussd-ai-tutor.git
cd ussd-ai-tutor
```

### 2. Get a Mistral API key
Sign up at [console.mistral.ai](https://console.mistral.ai) → API Keys → Create new key.

### 3. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import this repo
2. Add an environment variable: `MISTRAL_API_KEY` = your key
3. Deploy — you'll get a live URL like `https://ussd-ai-tutor.vercel.app`

### 4. Set up Africa's Talking
1. Create a free sandbox account at [account.africastalking.com](https://account.africastalking.com)
2. Go to **USSD** → note your sandbox service code
3. Set the **Callback URL** to: `https://ussd-ai-tutor.vercel.app/api/ussd`

### 5. Test it
Use Africa's Talking's built-in **USSD Simulator** (in the sandbox dashboard) to dial your service code and walk through the menu as if using a real feature phone.

## Project Structure
ussd-ai-tutor/
├── api/
│ └── ussd.js — main webhook handler
├── package.json
└── README.md

## Documentation

Full design documentation — including the system prompt, 20-prompt library, conversation flows, testing results, and Responsible AI assessment — is available in the accompanying reports submitted alongside this repository.

## Known Limitations

- No persistent database — each session is stateless, tracked only via USSD's own cumulative text parameter
- Currently tied to Mistral AI's API; switching providers would require rewriting the `askTutor` function
- Sandbox-only deployment — not yet connected to a live production USSD short code

## Future Improvements

- Ground factual responses (formulas, dates) against a verified curriculum source to reduce hallucination risk
- Add a feedback mechanism for students/teachers to flag incorrect responses
- Move from sandbox to a live Africa's Talking production USSD code