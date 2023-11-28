document.addEventListener("DOMContentLoaded", function () {
  const registroForm = document.getElementById("registroForm");

  registroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario ya existe en localStorage
    if (localStorage.getItem(username)) {
      var existe = document.getElementById("info");
      existe.textContent =
        "El usuario ya existe. Por favor, elige otro nombre de usuario.";
    } else {
      // Almacenar nuevos datos en localStorage
      const userData = {
        username: username,
        email: email,
        password: password,
      };

      localStorage.setItem(username, JSON.stringify(userData));

      // Redirigir a la página de inicio de sesión u otra página
      window.location.href = "login.html";
    }
  });
});
