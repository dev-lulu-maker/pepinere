const form = document.getElementById("form-actu");
const container = document.getElementById("actu-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const titre = document.getElementById("titre").value.trim();
  const date = document.getElementById("date").value;
  const contenu = document.getElementById("contenu").value.trim();

  if (titre && date && contenu) {
    ajouterActu({ titre, date, contenu });
    form.reset();
  } else {
    alert("Merci de remplir tous les champs !");
  }
});

function ajouterActu(actu) {
  const article = document.createElement("article");
  article.classList.add("actu");

  article.innerHTML = `
    <h2>${actu.titre}</h2>
    <div class="date">Publié le ${actu.date}</div>
    <p>${actu.contenu}</p>
  `;

  container.prepend(article);
}
