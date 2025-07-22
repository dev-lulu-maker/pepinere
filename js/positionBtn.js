const scrollBtn = document.getElementById("scrollToTopBtn");

// Afficher le bouton après un certain scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// Scroll fluide vers le haut au clic
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
