emailjs.init("o9SQu3fEENISnZvrA");

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Récupérer les données du formulaire
  const params = {
    name: document.getElementById("name").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Envoi des données avec EmailJS
  emailjs.send("service_d6vq969", "template_dnfs5no", params)
    .then(function(response) {
      alert("Message envoyé avec succès ! Merci de m'avoir contacté.");
    }, function(error) {
      alert("Une erreur s'est produite : " + error.text);
    });
});