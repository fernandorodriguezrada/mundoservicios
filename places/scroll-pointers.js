function scrollToInfo() {
  const infoDiv = document.getElementById("info");
  infoDiv.scrollIntoView({ behavior: "smooth" });
}

const pointerLaraDiv = document.querySelector(".pointer-lara");
const messageDiv = document.querySelector(".message");

pointerLaraDiv.addEventListener("mouseenter", function () {
  messageDiv.style.display = "block";
});

pointerLaraDiv.addEventListener("mouseleave", function () {
  messageDiv.style.display = "none";
});

pointerLaraDiv.addEventListener("click", scrollToInfo);
