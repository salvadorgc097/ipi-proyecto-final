document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Recuperar datos almacenados en localStorage
    const storedUser = localStorage.getItem(username);

    if (storedUser) {
      const userData = JSON.parse(storedUser);

      // Comparar la contraseña ingresada con la almacenada
      if (userData.password === password) {
        // Almacenar el nombre de usuario en localStorage
        localStorage.setItem("loggedInUser", username);

        // Redirigir a la página principal u otra página
        window.location.href = "Index.html";
      } else {
        var incorecto = document.getElementById("info");
        incorecto.textContent = "Datos incorrectos";
      }
    } else {
      var encontrado = document.getElementById("info");
      encontrado.textContent = "Usuario no encontrado";
    }
  });

  // Puedes modificar esta parte según tus necesidades
  const welcomeMessage = document.createElement("p");
  welcomeMessage.textContent = `¡Bienvenido, ${username}!`;

  const mainContent = document.querySelector(".nombre-usuario");
  mainContent.innerHTML = ""; // Limpiar el contenido actual
  mainContent.appendChild(welcomeMessage);
});
