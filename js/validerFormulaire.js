        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault(); // Empêche l'envoi du formulaire

            // Récupération des valeurs
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Réinitialisation des messages d'erreur
            document.getElementById("nameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("messageError").textContent = "";

            let isValid = true;

            // Vérification du nom
            if (name === "") {
                document.getElementById("nameError").textContent = "Le nom est requis.";
                isValid = false;
            }

            // Vérification de l'email avec regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById("emailError").textContent = "L'adresse email est invalide.";
                isValid = false;
            }

            // Vérification du message
            if (message.length < 10) {
                document.getElementById("messageError").textContent = "Le message doit contenir au moins 10 caractères.";
                isValid = false;
            }

            // Si tout est valide
            if (isValid) {
                alert("Formulaire envoyé avec succès !");
                // Envoyer les données avec AJAX ou soumettre le formulaire si besoin :
                // e.target.submit();
            }
        });

