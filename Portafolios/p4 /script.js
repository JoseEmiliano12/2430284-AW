// Simulación de "base de datos" en memoria
let users = [
  { email: "usuario1@example.com", password: "123456" },
  { email: "test@example.com", password: "abc123" },
];

// Vistas
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");

// Formularios
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Campos
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");

// Errores
const loginError = document.getElementById("login-error");
const registerError = document.getElementById("register-error");

// Mostrar registro
document.getElementById("show-register").addEventListener("click", () => {
  loginContainer.classList.add("hidden");
  registerContainer.classList.remove("hidden");
  loginError.textContent = "";
});

// Mostrar login
document.getElementById("show-login").addEventListener("click", () => {
  registerContainer.classList.add("hidden");
  loginContainer.classList.remove("hidden");
  registerError.textContent = "";
});

// Login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = loginEmail.value.trim();
  const password = loginPassword.value;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    // Guardar en localStorage
    localStorage.setItem("loggedUser", email);

    // Redirigir a la página de bienvenida
    window.location.href = "bienvenido.html";
  } else {
    loginError.textContent = "Correo o contraseña incorrectos.";
  }
});

// Registro
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = registerEmail.value.trim();
  const password = registerPassword.value;

  const exists = users.some((u) => u.email === email);

  if (exists) {
    registerError.textContent = "Este correo ya está registrado.";
  } else {
    users.push({ email, password });
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    registerContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
    registerForm.reset();
  }
});
