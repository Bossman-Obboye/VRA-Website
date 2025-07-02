document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNavbar");
  const menuToggle = document.getElementById("menuToggle");
  const navbarNav = document.getElementById("navbarNav");
  const navbarActions = document.querySelector(".navbar-actions");

  window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navbarNav.classList.toggle("active");
    navbarActions.classList.toggle("active");

    document.body.style.overflow = menuToggle.classList.contains("active")
      ? "hidden"
      : "";
  });

  navbarNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navbarNav.classList.remove("active");
      navbarActions.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
      menuToggle.classList.remove("active");
      navbarNav.classList.remove("active");
      navbarActions.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // -------------------------
  // **Hero slider logic (new)**
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;
  const total = slides.length;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });
  }

  let slideInterval = setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
  }, 3000);

  document.getElementById("heroPrev").addEventListener("click", () => {
    current = (current - 1 + total) % total;
    showSlide(current);
    resetInterval();
  });

  document.getElementById("heroNext").addEventListener("click", () => {
    current = (current + 1) % total;
    showSlide(current);
    resetInterval();
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      current = (current + 1) % total;
      showSlide(current);
    }, 3000);
  }

  showSlide(current);
});
