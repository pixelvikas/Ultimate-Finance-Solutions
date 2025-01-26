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

// Initialize Kursor after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new kursor({
    type: 2, // Type of cursor (1 = dot, 2 = circle, etc.)
    color: "#36c49f", // Custom color for the cursor (use a solid color)
    removeDefaultCursor: true, // Remove the browser's default cursor
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right, .zoom-in, .rotate-in"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  animatedElements.forEach((element) => observer.observe(element));

  // Optional: Cleanup the observer on component unmount (useful for frameworks)
  return () => {
    animatedElements.forEach((element) => observer.unobserve(element));
  };
});
