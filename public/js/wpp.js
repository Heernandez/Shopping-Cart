document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento de texto por su ID
    var whatsappText = document.getElementById("whatsapp-text");
    // Obtener el enlace del ícono de WhatsApp por su ID
    var whatsappIcon = document.getElementById("whatsapp-icon");

    // Mostrar el texto al pasar el ratón sobre el enlace del ícono de WhatsApp
    whatsappIcon.addEventListener("mouseover", function () {
        whatsappText.classList.remove("hidden");
    });
    // Ocultar el texto al salir del enlace del ícono de WhatsApp
    whatsappIcon.addEventListener("mouseout", function () {
        whatsappText.classList.add("hidden");
    });

    // Ocultar el texto después de 5 segundos
    setTimeout(function () {
        whatsappText.classList.add("hidden");
    }, 5000);
});