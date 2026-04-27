

const AffirmationDiv = document.getElementById("Affirmation");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const likeBtn = document.getElementById("likeBtn");

let currentAffirmation = "";


async function fetchaff() {
  try {
  
    AffirmationDiv.innerText = "Loading affirmation... ✨";

    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    currentAffirmation = data.quote;
    AffirmationDiv.innerText = currentAffirmation;

  } catch (error) {
    console.log("Error:", error);

    AffirmationDiv.innerText = "Sorry, couldn't fetch an affirmation right now 😢";
  }
}
generateBtn.addEventListener("click", fetchaff);

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentAffirmation);
    alert("Affirmation copied to clipboard! 📋");
  } catch (error) {
    alert("Copy failed 😢");
  }
});

// Like Button
likeBtn.addEventListener("click", () => {
  alert("You liked this affirmation! 💖");
});