// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
  const elementsToReveal = document.querySelectorAll('.fade-in, .fade-up, .timeline-item');

  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      } else {
        entry.target.classList.remove('appear'); // Remove class when out of view
      }
    });
  }, options);

  elementsToReveal.forEach(el => revealOnScroll.observe(el));
});



function welcomeUser() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();
  const popup = document.getElementById("welcomePopup");
  const message = document.getElementById("welcomeMessage");
  const userName = document.getElementById("userName");
  const progress = document.getElementById("progressFill");

  if (name) {
    // Inject name into span (so it's styled separately)
    userName.textContent = name;

    // Show popup (force reflow for restart)
    popup.style.display = "none";
    void popup.offsetWidth;
    popup.style.display = "flex";

    // Clear input
    nameInput.value = "";

    // Reset progress
    progress.style.width = "100%";
    let timeLeft = 5;
    const interval = 1000;
    const totalTime = 5 * interval;

    const countdown = setInterval(() => {
      timeLeft--;
      const percent = (timeLeft / 5) * 100;
      progress.style.width = percent + "%";

      if (timeLeft <= 0) {
        clearInterval(countdown);
        popup.style.display = "none";
      }
    }, interval);
  }
}



