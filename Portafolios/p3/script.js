//* Array para almacenar los alumnos
let alumnos = [];

// Todo: Referencias al DOM
const form = document.querySelector("form");
const tablaBody = document.querySelector("table tbody");
const btnGuardar = document.getElementById("btn-guardar");
const btnLimpiar = document.getElementById("btn-limpiar");

// Todo: Renderizar alumnos en la tabla
function renderTabla() {
  tablaBody.innerHTML = "";

  if (alumnos.length === 0) {
    tablaBody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center">No hay datos disponibles</td>
      </tr>
    `;
    return;
  }

  alumnos.forEach((alumno, index) => {
    const fila = `
      <tr>
        <td>${alumno.matricula}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.carrera}</td>
        <td>${alumno.email}</td>
        <td>${alumno.telefono}</td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="eliminarAlumno(${index})">Eliminar</button>
        </td>
      </tr>
    `;
    tablaBody.insertAdjacentHTML("beforeend", fila);
  });
}

//* Guardar alumno en el array
btnGuardar.addEventListener("click", (e) => {
  e.preventDefault();

  const alumno = {
    matricula: document.getElementById("matricula").value.trim(),
    nombre: document.getElementById("nombre-completo").value.trim(),
    carrera: document.getElementById("carrera").value,
    email: document.getElementById("email").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
  };

  //* Validar
  if (!alumno.matricula || !alumno.nombre || !alumno.carrera) {
    alert("Completa los campos obligatorios: Matrícula, Nombre y Carrera.");
    return;
  }

  alumnos.push(alumno); //* se guarda en el array
  renderTabla();
  form.reset();
});

//* Limpiar formulario
btnLimpiar.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
});

// ! Eliminar alumno
function eliminarAlumno(index) {
  alumnos.splice(index, 1);
  renderTabla();
}
