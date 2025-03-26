// Set the target date and time
const targetDate = new Date("March 29, 2025 16:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the countdown display
        document.getElementById("countdown").innerHTML = `
            <div class="time-box"><span class="time">${days}</span><span class="label">Days</span></div>
            <div class="time-box"><span class="time">${hours}</span><span class="label">Hours</span></div>
            <div class="time-box"><span class="time">${minutes}</span><span class="label">Minutes</span></div>
            <div class="time-box"><span class="time">${seconds}</span><span class="label">Seconds</span></div>
        `;
    } else {
        // When the countdown reaches zero
        document.getElementById("countdown").innerHTML = `<h2>Party Time! 🎉</h2>`;
        clearInterval(timerInterval); // Stop the interval
    }
}

// Call the updateCountdown function every second
const timerInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
