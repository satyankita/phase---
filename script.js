const jokeDiv = document.getElementById('joke');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const likeBtn = document.getElementById('likeBtn');

let currentJoke = "";

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      jokeDiv.innerText = data.setup + " 😂 " + data.punchline;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      jokeDiv.innerText = "Sorry, couldn't fetch a joke right now.";
    });
  }

  generateBtn.addEventListener("click", fetchJoke);

  copyBtn.addEventListener("click", () => {

    const text = document.querySelector("#joke").innerText;
    navigator.clipboard.writeText(text)
    .then(() =>{ alert("Joke copied to clipboard!");
    });
  
       
});
likeBtn.addEventListener("click", () => {
  alert("You liked this joke!");
});


