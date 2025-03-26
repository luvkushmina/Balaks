// Debug Log to Check if Script is Running
console.log("Script loaded successfully!");

// Countdown Timer
const countdown = () => {
    try {
        const targetDate = new Date('March 29, 2025 16:00:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = '<h2>Party Time! 🎉</h2>';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    } catch (error) {
        console.error("Error in countdown timer:", error);
    }
};

// Start the countdown timer
const timer = setInterval(countdown, 1000);

// Show Guest List
function showGuestList() {
    try {
        const guestList = document.getElementById('guestList');
        const joinButton = document.querySelector('.join-button');
        if (guestList && joinButton) {
            guestList.style.display = 'block';
            joinButton.style.display = 'none';
            console.log("Guest list displayed successfully!");
        } else {
            console.error("Guest list or join button not found!");
        }
    } catch (error) {
        console.error("Error in showGuestList:", error);
    }
}
