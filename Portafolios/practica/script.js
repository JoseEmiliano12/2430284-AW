const users = [
  { nombre: "Admin", correo: "admin@mail.com", password: "1234", rol: "admin", activo: true },
  { nombre: "Juan", correo: "juan@mail.com", password: "abcd", rol: "usuario", activo: true },
];

let tasks = [
  { titulo: "Tarea 1", asignado: "Juan", descripcion: "Primera tarea", prioridad: "Alta", estado: "Pendiente", fecha: "2025-10-01" },
];

function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;

  const user = users.find(u => u.correo === email && u.password === pass);

  if (user) {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    renderUsuarios();
    renderTareas();
  } else {
    document.getElementById("login-error").textContent = "Credenciales incorrectas.";
  }
}

function logout() {
  document.getElementById("login-container").classList.remove("hidden");
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("login-error").textContent = "";
}

function renderUsuarios() {
  const tabla = document.getElementById("users-table");
  tabla.innerHTML = `
    <tr>
      <th>Nombre</th><th>Correo</th><th>Rol</th><th>Activo</th><th>Acciones</th>
    </tr>
  `;
  users.forEach((u, i) => {
    tabla.innerHTML += `
      <tr>
        <td>${u.nombre}</td>
        <td>${u.correo}</td>
        <td>${u.rol}</td>
        <td>${u.activo ? "Sí" : "No"}</td>
        <td>
          <button onclick="editarUsuario(${i})">Editar</button>
          <button onclick="eliminarUsuario(${i})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

function renderTareas() {
  const tabla = document.getElementById("tasks-table");
  tabla.innerHTML = `
    <tr>
      <th>Título</th><th>Asignado</th><th>Descripción</th><th>Prioridad</th><th>Estado</th><th>Fecha Límite</th><th>Acciones</th>
    </tr>
  `;
  tasks.forEach((t, i) => {
    tabla.innerHTML += `
      <tr>
        <td>${t.titulo}</td>
        <td>${t.asignado}</td>
        <td>${t.descripcion}</td>
        <td>${t.prioridad}</td>
        <td>${t.estado}</td>
        <td>${t.fecha}</td>
        <td>
          <button onclick="editarTarea(${i})">Editar</button>
          <button onclick="eliminarTarea(${i})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

function editarUsuario(index) {
  const nuevoNombre = prompt("Nuevo nombre:", users[index].nombre);
  if (nuevoNombre) {
    users[index].nombre = nuevoNombre;
    renderUsuarios();
  }
}

function eliminarUsuario(index) {
  if (confirm("¿Eliminar este usuario?")) {
    users.splice(index, 1);
    renderUsuarios();
  }
}

function crearTarea() {
  const titulo = prompt("Título:");
  const asignado = prompt("Asignado a:");
  const descripcion = prompt("Descripción:");
  const prioridad = prompt("Prioridad (Alta, Media, Baja):");
  const estado = prompt("Estado (Pendiente, En progreso, Completada):");
  const fecha = prompt("Fecha límite (YYYY-MM-DD):");

  if (titulo && asignado) {
    tasks.push({ titulo, asignado, descripcion, prioridad, estado, fecha });
    renderTareas();
  }
}

function editarTarea(index) {
  const nuevaDesc = prompt("Nueva descripción:", tasks[index].descripcion);
  if (nuevaDesc) {
    tasks[index].descripcion = nuevaDesc;
    renderTareas();
  }
}

function eliminarTarea(index) {
  if (confirm("¿Eliminar esta tarea?")) {
    tasks.splice(index, 1);
    renderTareas();
  }
}
