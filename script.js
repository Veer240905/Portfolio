
document.querySelectorAll(".nav-button").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();


const modal = document.getElementById("resumeModal");
const btn = document.getElementById("showResume");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = event => {
  if (event.target == modal) modal.style.display = "none";
};


document.querySelectorAll(".project-title").forEach(title => {
  title.addEventListener("click", () => {
    const desc = title.nextElementSibling;
    desc.style.display = desc.style.display === "block" ? "none" : "block";
  });
});
