


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

