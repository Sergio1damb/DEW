document
  .getElementById("mostrar_contraseña")
  .addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    if (this.checked) {
      passwordField.type = "text"; // Muestra la contraseña
    } else {
      passwordField.type = "password"; // Oculta la contraseña
    }
  });
