// Inicio de Sesión
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "menu.html"; // Redirige al menú principal
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
