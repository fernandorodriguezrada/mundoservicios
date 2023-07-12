const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const reseñasLink = document.querySelector('a[href="/stars/stars.html"]');

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  if (navbarLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

reseñasLink.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  document.body.style.overflow = "auto";
});

