// const { createElement } = require("react");

const images = [
  '../medias/images/hero1.jpg',
  '../medias/images/hero2.jpg',
  '../medias/images/hero3.jpg'
];

let currentIndex = 0;
const hero = document.querySelector('.hero-carousel');

function changeBackground() {
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Lancer au chargement
changeBackground();

// Changer toutes les 5 secondes
setInterval(changeBackground, 5000);
