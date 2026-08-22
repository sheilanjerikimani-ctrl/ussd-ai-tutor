
Project: USSD AI Study Assistant  |  Prepared by: Sheila Kimani  |  AnalystLab Africa
Business Problem
Students in rural and low-income areas of Kenya and across Africa frequently lack access to a tutor or reliable study support outside the classroom. Many households in these areas do not own smartphones or have consistent internet access, relying instead on basic feature phones. Existing mobile education solutions that reach this audience over USSD or SMS, such as Eneza Education / Shupavu291, are largely built around static, pre-written content — fixed quizzes and canned study tips — rather than a genuinely responsive tutor. A student cannot ask a real question in their own words and receive a tailored explanation; they can only navigate pre-set menus. Meanwhile, AI-powered tools that can hold a real conversation and adapt to a student's specific question typically require a smartphone and mobile data, which excludes the exact students who need this support most.
Target Users
●	Primary: secondary school students (particularly those preparing for KCSE) in rural or low-income households who own only a feature phone.
●	Secondary: students in areas with unreliable or costly internet access who prefer a zero-data, zero-app alternative to smartphone-based study tools.
●	Indirect beneficiaries: parents and guardians who cannot afford a private tutor but have basic airtime or USSD access for their child.
Goals
●	Give students a way to ask real, specific academic questions in their own words and receive a clear, adapted explanation — not a static menu of pre-written content.
●	Make the tool usable entirely on a feature phone with no internet connection and minimal cost, using USSD rather than an app or SMS-only interface.
●	Keep every interaction short enough to fit USSD's session and character constraints, without sacrificing the clarity of the explanation.
●	Build trust with students and parents by keeping the assistant strictly educational in scope and transparent about its limitations.
Key Features
●	Ask-a-Question mode: free-text academic questions answered with a short, plain-language explanation.
●	Practice Quiz mode: multiple-choice questions on a chosen subject/topic, with immediate feedback.
●	Study Plan mode: a simple, prioritized weekly revision plan based on the subjects and time the student specifies.
●	Graceful handling of unclear, off-topic, or out-of-scope requests, redirecting the student back to what the assistant can help with.
●	Session-aware design that accounts for USSD's short session windows and character limits per screen.
User Scenarios
Scenario	Description
Concept explanation	A student dials the USSD code, selects 'Ask a Question', types a subject and a question in their own words (e.g. 'Biology: why do plants need sunlight'), and receives a short, clear explanation broken into a readable USSD-length response.
Quiz practice	A student selects 'Practice Quiz', picks a subject and topic, and receives multiple-choice questions one at a time, with immediate feedback and a brief explanation after each answer.
Study plan request	A student nearing an exam (e.g. KCSE) asks for help organizing revision time across several subjects and receives a simple, prioritized weekly plan.
Unclear or off-topic request	A student sends an ambiguous or unrelated message (e.g. just 'help' or a personal problem unrelated to schoolwork); the assistant asks a clarifying question or gently redirects to its actual scope.
Session timeout / re-entry	A student's USSD session times out mid-explanation (a real constraint of USSD sessions); on re-dialing, the assistant should allow them to resume or restart cleanly rather than losing all context confusingly.

Expected Outcomes
●	Students without smartphone or internet access gain a way to get real, adaptive academic help rather than only static pre-written content.
●	Reduced reliance on having a physical tutor available, particularly for students in under-resourced rural schools.
●	A reusable, documented prompt and conversation design that could realistically be deployed on Africa's Talking USSD infrastructure in a future iteration beyond this prototype.
