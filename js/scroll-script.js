var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 20) {
    scrollToTopBtn.classList.add("show");
    scrollToTopBtn.classList.remove("hide");
  } else {
    scrollToTopBtn.classList.add("hide");
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const formContainer = document.querySelector(".form-container");
const scrollToFormContainer = () => {
  formContainer.scrollIntoView({ behavior: "smooth" });
};
document
  .querySelector(".contact-now")
  .addEventListener("click", scrollToFormContainer);
