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
window.onclick = (e) => {
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
