// Inicio de Sesión
function login() {
    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!role) {
        alert("Por favor, selecciona tu rol.");
        return;
    }

    if (username === "admin" && password === "1234" && role === "admin") {
        window.location.href = "menu.html"; // Redirige al menú principal del administrador
    } else if (username === "empresa" && password === "1234" && role === "empresa") {
        window.location.href = "empresa-dashboard.html"; // Redirige al menú de la empresa
    } else if (username === "estibador" && password === "1234" && role === "estibador") {
        window.location.href = "estibador-dashboard.html"; // Redirige al menú del estibador
    } else {
        alert("Usuario, contraseña o rol incorrectos.");
    }
}
