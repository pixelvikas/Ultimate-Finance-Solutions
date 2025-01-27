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

/* Hide header on scroll down, show on scroll up */
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    header.classList.add("hidden-header");
  } else {
    // Scrolling up
    header.classList.remove("hidden-header");
  }
  lastScrollY = window.scrollY;
});

// 🥷 Improved Toggle Functionality
document.querySelector(".switch").addEventListener("click", (event) => {
  // Identify the clicked element
  const investmentToggle = document.getElementById("investment-toggle");
  const loanToggle = document.getElementById("loan-toggle");

  // Determine where the user clicked
  const switchBounds = event.currentTarget.getBoundingClientRect();
  const clickPositionX = event.clientX - switchBounds.left;

  // Toggle the appropriate input based on the click position
  if (clickPositionX < switchBounds.width / 2) {
    investmentToggle.checked = true; // Left half: Investment
    investmentToggle.dispatchEvent(new Event("change")); // Trigger change event
  } else {
    loanToggle.checked = true; // Right half: Loan
    loanToggle.dispatchEvent(new Event("change")); // Trigger change event
  }
});

// Trigger tab updates on input change
document.querySelectorAll(".switch-input").forEach((input) => {
  input.addEventListener("change", () => {
    const targetTab = input.nextElementSibling.getAttribute("data-tab");

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
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loading-page");
  const mainContent = document.getElementById("main-content");

  // Simulate a delay (e.g., 1.5 seconds for demo)
  setTimeout(() => {
    // Apply fade-out effect for loader
    loader.style.opacity = "0"; // Smooth fade-out for loader
    loader.style.visibility = "hidden"; // Ensures loader is not interactive when hidden

    // Show the main content
    mainContent.classList.remove("hidden");
    mainContent.classList.add("show");
  }, 1500); // Adjust delay time as needed (1500ms = 1.5 seconds)
});
