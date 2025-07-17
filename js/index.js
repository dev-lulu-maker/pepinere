// const { createElement } = require("react");

const images = [
  'medias/images/hero1.jpg',
  'medias/images/hero2.jpg',
  'medias/images/hero3.jpg'
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


const btn = document.getElementById("menuToggle")
const navbar = document.querySelector('.navbar')
const btnClose= document.querySelector('.btnClose')

btn.addEventListener("click", () => {
  navbar.classList.add('active');
  btnClose.addEventListener('click', () => {
    navbar.classList.remove('active')
  })
})


//======= modal==========

  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close');

  // Affiche la modal après 2 secondes
  window.onload = () => {
    setTimeout(() => {
      modal.style.display = 'flex';
    }, 2000); // 2000 ms = 2 sec
  };

  // Ferme la modal quand on clique sur le bouton de fermeture
  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  // Ferme si on clique à l'extérieur de la boîte
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };



// derniersActus

const actualitesAccueil = [
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



  function afficherActuAccueil() {
  const container= document.getElementById('actus-accueil-container')
  if (!container) return;
  const derniersActus = actualitesAccueil.slice(0, 2);

  derniersActus.forEach(actu=>{
    const article = document.createElement('article');
    article.classList.add('actu');

    article.innerHTML=`
     <h3>${actu.titre} </h3>
                 <div class="date">Publié le ${actu.date} </div>
                 <p>${actu.contenu} </p>
    `;
    container.appendChild(article);
  })
}
window.addEventListener('DOMContentLoaded', afficherActuAccueil);