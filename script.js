const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  const isExpanded = menuIcon.getAttribute("aria-expanded") === "true";
  menuIcon.setAttribute("aria-expanded", !isExpanded);
  navLinks.classList.toggle("active");
});
