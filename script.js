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
audio = new Audio('https://www.chosic.com/wp-content/uploads/2023/01/Luke-Bergs-Beach-Vibes(chosic.com).mp3');
audio.loop = true;
audio.play();
document.getElementById('audioControlButton').addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    this.textContent = "Pause";
  } else {
    audio.pause();
    this.textContent = "Play";
  }
});
