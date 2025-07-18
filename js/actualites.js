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

// actualites js
const actualites = [
  {
    titre: "Nouveaux",
    date: "2025-07-01",
    contenu: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad unde porro dolor reprehenderit sequi, eius fugit sapiente expedita fuga, laborum blanditiis, ipsum obcaecati autem sit quaerat beatae. Culpa, necessitatibus nostrum."
  },
  {
    titre: "Nouveaux",
    date: "2025-07-01",
    contenu: "sit amet, consectetur adipisicing elit. Ad unde porro dolor reprehenderit sequi, eius fugit sapiente expedita fuga, laborum blanditiis, ipsum obcaecati autem sit quaerat beatae. Culpa, necessitatibus nostrum."
  },
  {
    titre: "Nouveaux",
    date: "2025-07-01",
    contenu: "sit amet, consectetur adipisicing elit. Ad unde porro dolor reprehenderit sequi, eius fugit sapiente expedita fuga, laborum blanditiis, ipsum obcaecati autem sit quaerat beatae. Culpa, necessitatibus nostrum."
  }
];

function afficherActualites() {
  const container = document.getElementById('actu-container');
  actualites.forEach(actu=>{
    const article= document.createElement('article')
    article.classList.add('actu')
    article.innerHTML=`
    <h2>${actu.titre} </h2>
            <div class="date">${actu.date} </div>
            <p>${actu.contenu}.</p>
    `;
    container.appendChild(article)
  })
}
window.addEventListener('DOMContentLoaded', afficherActualites)

function afficherActuAccueil() {
  const container= document.getElementById('actus-accueil-container')
  if (!container) return;
  const derniersActus = actualitesAccueil.slic(0,2);

  derniersActus.forEach(actu=>{
    const article = document.createElement('article')
    article.classList.add('actu')

    article.innerHTML=`
     <h3>${actu.titre} </h3>
                 <div class="date">${actu.date} </div>
                 <p>${actu.contenu} </p>
    `
    container.appendChild(article)
  })
}
window.addEventListener('DOMContentLoaded', afficherActuAccueil)