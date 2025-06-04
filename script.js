// Inicializa EmailJS
(function() {
  emailjs.init("gBMVDofguoJa45V5V"); // Tu Public Key
})();

// Manejo del envío del formulario
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_oo2kkvn", "template_8h7nh2l", this)
    .then(function() {
      alert("Mensaje enviado con éxito 🚀");
      document.getElementById("contact-form").reset(); // Limpia el formulario
    }, function(error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.");
    });
});
