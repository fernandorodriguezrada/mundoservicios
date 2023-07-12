var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 20) {
    scrollToTopBtn.classList.add("show");
    scrollToTopBtn.classList.remove("hide");
  } else {
    scrollToTopBtn.classList.add("hide");
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo(0, 0);
});

var reviewsLink = document.querySelector('a[href="/stars/stars.html"]');

reviewsLink.addEventListener("click", function(event) {
  event.preventDefault();
  var ratingBox = document.querySelector(".rating-box");
  ratingBox.scrollIntoView({behavior: "smooth"});
});