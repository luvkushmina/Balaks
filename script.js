// Countdown Timer
function updateCountdown() {
    const targetDate = new Date("March 29, 2025 16:00:00").getTime(); // 4:00 PM
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.querySelectorAll(".timer-box").forEach(box => box.textContent = "It's Time!");
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Confetti burst on page load
window.onload = function() {
    confetti({
        particleCount: 1000,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Optional: Add cheerful background music (uncomment and add an audio file if desired)
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.play();
};
