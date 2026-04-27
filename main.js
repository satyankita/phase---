const input = document.getElementById("userInput");
const para = document.getElementById("response");

const askBtn = document.getElementById("askBtn");
const summaryBtn = document.getElementById("summaryBtn");
const ideasBtn = document.getElementById("ideasBtn");
const definitionBtn = document.getElementById("definitionBtn");

const API_KEY = "AIzaSyA9Ilh2Sabeu3ohYiDfudxZkOgtl8RbGV4";

async function fetchContent(prompt) {
    try {
        para.classList.add("loading");
        para.innerHTML = "Thinking...";

        const result = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }]
                })
            }
        );

        const data = await result.json();
        para.classList.remove("loading");

        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            para.innerHTML = data.candidates[0].content.parts[0].text;
        } else if (data.error) {
            para.innerHTML = `❌ Error: ${data.error.message}`;
        } else {
            para.innerHTML = "No response received 😅";
        }

        input.value = "";

    } catch (err) {
        para.classList.remove("loading");
        para.innerHTML = "Network error! Check your connection 🔌";
        console.error(err);
    }
}

askBtn.addEventListener("click", () => {
    fetchContent(`
${input.value || "What is JavaScript?"}

• Point 1
Short 1-line explanation.

• Point 2
Short 1-line explanation.

• Point 3
Short 1-line explanation.

• Point 4
Short 1-line explanation.

• Point 5
Short 1-line explanation.

ONLY 5 POINTS.
    `);
});

summaryBtn.addEventListener("click", () => {
    fetchContent(`
${input.value || "What is JavaScript?"}

Rules:
• Sirf 5 points likho
• Har point next line me ho
• Simple language
• No extra text
    `);
});

ideasBtn.addEventListener("click", () => {
    fetchContent(`
${input.value || "mobile app"}

Rules:
• Only ideas
• No extra text
    `);
});

definitionBtn.addEventListener("click", () => {
    fetchContent(`
${input.value || "JavaScript"}

Give only definition in 3 lines.
No extra text.
    `);
});