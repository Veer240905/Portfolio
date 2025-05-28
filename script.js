// Smooth scroll on button click
document.querySelectorAll(".nav-button").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
