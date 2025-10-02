// Simulación de "base de datos" en localStorage para usuarios
let users = JSON.parse(localStorage.getItem("users")) || [];

// Elementos del formulario de login
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const showRegisterLink = document.getElementById("show-register");
const showLoginLink = document.getElementById("show-login");
const loginError = document.getElementById("login-error");
const registerError = document.getElementById("register-error");

// Cambiar entre login y registro
if (showRegisterLink) {
  showRegisterLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginContainer.classList.add("hidden");
    registerContainer.classList.remove("hidden");
  });
}

if (showLoginLink) {
  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    registerContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
  });
}

// Manejo del registro
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Verificar si el usuario ya existe
    const userExists = users.find(user => user.email === email);
    
    if (userExists) {
      registerError.textContent = "Este correo ya está registrado";
      return;
    }

    // Guardar nuevo usuario
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    registerContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
    registerForm.reset();
    registerError.textContent = "";
  });
}

// Manejo del login
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Verificar credenciales
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem("loggedUser", email);
      window.location.href = "bienvenido.html";
    } else {
      loginError.textContent = "Correo o contraseña incorrectos";
    }
  });
}