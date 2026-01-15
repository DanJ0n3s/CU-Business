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

/* --- GET QUOTE SPECIFIC --- */
const sendQuoteEmail = (event) => {
  event.preventDefault();

  const country = document.getElementById("quote-country").value;
  const weight = document.getElementById("quote-weight").value;
  const type = document.getElementById("quote-type").value;
  const email = document.getElementById("quote-email").value;

  // This fetches the value from the new Text Input
  const goodsType = document.getElementById("quote-type-goods").value;

  const toEmail = "cybusinessventures@gmail.com";
  const subject = "New Quote Request";

  // Includes the free-form text typed by the user
  const body = `Destination Country: ${country}%0D%0APackage Weight: ${weight}kg%0D%0AShipping Type: ${type}%0D%0AGoods Type: ${goodsType}%0D%0ACustomer Email: ${email}`;

  window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;
};
