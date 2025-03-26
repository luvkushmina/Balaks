document.addEventListener('DOMContentLoaded', () => {
  
  // --- Countdown Timer ---
  const countdown = () => {
    // Set target date: March 29, 2025 4:00 PM
    const countdownDate = new Date('March 29, 2025 16:00:00').getTime();
    const now = new Date().getTime();
    const gap = countdownDate - now;

    // Time component calculations
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  };

  countdown(); // initial call
  setInterval(countdown, 1000);


  // --- Invitation Form Submission ---
  const inviteForm = document.getElementById('invite-form');
  inviteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Show confirmation message
    document.getElementById('invite-confirmation').classList.remove('hidden');
    // Reset the form input
    inviteForm.reset();
    // Trigger confetti animation using the canvas-confetti library
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  });


  // --- Lightbox Functionality for Gallery ---
  const galleryImages = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      // Use the data-full attribute for the image source in the lightbox
      lightboxImg.src = img.getAttribute('data-full');
      lightbox.classList.remove('hidden');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });
  
  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg && e.target !== lightboxClose) {
      lightbox.classList.add('hidden');
    }
  });


  // --- Background Music Toggle ---
  const musicToggle = document.getElementById('music-toggle');
  const backgroundMusic = document.getElementById('background-music');
  let isPlaying = false;

  musicToggle.addEventListener('click', () => {
    if (!isPlaying) {
      backgroundMusic.play();
      isPlaying = true;
      musicToggle.textContent = 'Pause Music';
    } else {
      backgroundMusic.pause();
      isPlaying = false;
      musicToggle.textContent = 'Play Music';
    }
  });

  // --- Optional: Trigger Confetti on Page Load ---
  // Uncomment the line below if you want a confetti burst when the page loads.
  // confetti({ particleCount: 50, spread: 100, origin: { y: 0.3 } });
});
