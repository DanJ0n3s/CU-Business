/* --- SHARED LOGIC --- */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const waModal = document.getElementById("waModal");
const waFloat = document.querySelector(".whatsapp-float");
const closeModalBtns = document.querySelectorAll(".close-modal");

if (menuToggle)
  menuToggle.addEventListener("click", () =>
    navLinks.classList.toggle("active")
  );
if (waFloat)
  waFloat.addEventListener("click", () => {
    if (waModal) waModal.style.display = "flex";
  });
closeModalBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (waModal) waModal.style.display = "none";
  })
);
window.onclick = function (e) {
  if (e.target == waModal && waModal) waModal.style.display = "none";
};

const currentPath = window.location.pathname;
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (currentPath.includes(link.getAttribute("href")))
    link.classList.add("active");
});

function revealElements() {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 150)
      el.classList.add("active");
  });
}
window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

/* --- CONTACT SPECIFIC --- */
const sendContactEmail = (event) => {
  event.preventDefault();
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-msg").value;
  const toEmail = "cybusinessventures@gmail.com";
  const subject = "New Inquiry from Website";
  const body = `Full Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;
};
