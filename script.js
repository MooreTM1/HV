const heartTypes = ["❤️", "💗", "💖", "💘", "💕", "💞"];

function createHeart() {
    const heart = document.createElement("div");

    // Random heart selection
    heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    heart.classList.add("heart");

    // Randomize position and size across the screen
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = -20 + Math.random() * -100 + "vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Random sizes
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start hearts falling
setInterval(createHeart, 200);

// Event listener for start button
document.getElementById("startButton").addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.volume = 0.5;
    music.play().catch(error => console.log("Autoplay blocked:", error));

    // Hide the button and show content
    document.getElementById("startButton").style.display = "none";
    document.querySelector(".container").style.display = "block";

    // Show "HAPPY VALENTINE'S" after 2 seconds
    setTimeout(() => {
        document.getElementById("valentineText").style.opacity = "1";
    }, 10000);

    // Show poem after "HAPPY VALENTINE'S"
    setTimeout(() => {
        document.getElementById("poem").style.opacity = "1";
    }, 12000);
});
