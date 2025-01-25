const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLinks = document.querySelectorAll(".nav__link"),
  header = document.getElementById("header");

let lastScrollY = window.scrollY;

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Close menu when nav link is clicked */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

// /* Hide header on scroll down, show on scroll up */
// window.addEventListener("scroll", () => {
//   if (window.scrollY > lastScrollY) {
//     // Scrolling down
//     header.classList.add("hidden-header");
//   } else {
//     // Scrolling up
//     header.classList.remove("hidden-header");
//   }
//   lastScrollY = window.scrollY;
// });

// 🥷 Improved Toggle Functionality
document.querySelectorAll(".switch-label").forEach((label) => {
  label.addEventListener("click", () => {
    const targetTab = label.getAttribute("data-tab");

    // Update active tab content
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.toggle("active", content.id === targetTab);
    });

    // Update active services details
    document.querySelectorAll(".services-details").forEach((details) => {
      const isActive = details.id === targetTab.replace("content", "details");
      details.classList.toggle("active", isActive);
    });
  });
});
