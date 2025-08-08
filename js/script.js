// Show navbar after scrolling past home section with fade & slide animation
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const home = document.getElementById("home");

  if (!navbar || !home) return;

  const homeHeight = home.offsetHeight;

  if (window.scrollY > homeHeight - 50) {
    navbar.classList.add("visible");
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
    navbar.classList.remove("visible");
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("#navbar nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});
