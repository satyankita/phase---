



let bady = document.getElementById("answerOutput");
let btn = document.getElementById("getAnswerBtn");
btn.addEventListener("click", askQuestion);

async function askQuestion(){
    let question = document.getElementById("questionInput").value;
    try {
        const result = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyDlGTtNoWeOwyk3BvKWxEsV6WaZZDQArXY",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",                     
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: question + "(Give answer in bullet points and short format  Explain JavaScript in 5 main points with short explanation)"}]
                        }
                    ]
                })
            }
        );

        const data = await result.json();
        console.log(data);

        if (data.candidates) {
            let resultText = data.candidates[0].content.parts[0].text;

            bady.innerHTML = resultText;
        } else {
            bady.innerText = "Error: " + data.error.message;
        }

    } catch (err) {
        console.log(err);
        bady.innerText = "Something went wrong";
    }
}   
