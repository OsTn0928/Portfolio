// Inicializa EmailJS (poner tu public key)
emailjs.init("service_oo2kkvn");

const form = document.getElementById("formulario-contacto");
const estado = document.getElementById("estado-envio");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_oo2kkvn", "TU_TEMPLATE_ID", this)
    .then(function () {
      estado.textContent = "Mensaje enviado con éxito";
      estado.style.color = "limegreen";
      form.reset();
    }, function (error) {
      estado.textContent = "Hubo un error. Intenta nuevamente.";
      estado.style.color = "tomato";
      console.error("Error:", error);
    });
});
