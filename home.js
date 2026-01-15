/* --- GLOBAL LOGIC --- */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const waModal = document.getElementById("waModal");
const waFloat = document.querySelector(".whatsapp-float");
const closeModalBtns = document.querySelectorAll(".close-modal");

// Mobile Menu
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// WhatsApp Modal Logic
if (waFloat) {
  waFloat.addEventListener("click", () => {
    if (waModal) waModal.style.display = "flex";
  });
}
closeModalBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (waModal) waModal.style.display = "none";
  })
);
window.onclick = function (e) {
  if (e.target == waModal && waModal) waModal.style.display = "none";
};

// Active Link Highlighter
const currentPath = window.location.pathname;
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (currentPath.includes(href)) {
    link.classList.add("active");
  }
});

// Scroll Reveal
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

/* --- HOME SPECIFIC (Particles) --- */
const particlesContainer = document.getElementById("particles");

if (particlesContainer) {
  function createParticles() {
    const icons = [
      "fa-box",
      "fa-plane",
      "fa-globe",
      "fa-truck",
      "fa-ship",
      "fa-location-dot",
    ];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("i");
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      particle.classList.add("fas", randomIcon, "particle");

      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";
      particle.style.animationDelay = Math.random() * 5 + "s";
      const size = Math.random() * 1.5 + 0.5;
      particle.style.fontSize = size + "rem";

      particlesContainer.appendChild(particle);
    }
  }
  createParticles();
}
