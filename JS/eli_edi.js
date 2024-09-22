function eliminarUsuario(element) {
    const row = element.closest('tr');
    row.parentNode.removeChild(row);
}

function editarUsuario(element) {
    const row = element.closest('tr');
    const nombre = row.cells[0].innerText;
    const correo = row.cells[1].innerText;
    const telefono = row.cells[2].innerText;

    // Aquí puedes abrir un formulario para editar los datos
    const nuevoNombre = prompt("Edita el nombre:", nombre);
    const nuevoCorreo = prompt("Edita el correo:", correo);
    const nuevoTelefono = prompt("Edita el teléfono:", telefono);

    if (nuevoNombre) row.cells[0].innerText = nuevoNombre;
    if (nuevoCorreo) row.cells[1].innerText = nuevoCorreo;
    if (nuevoTelefono) row.cells[2].innerText = nuevoTelefono;
}

function eliminarEspecialista(element) {
    const row = element.closest('tr');
    row.parentNode.removeChild(row);
}

function editarEspecialista(element) {
    const row = element.closest('tr');
    const nombre = row.cells[0].innerText;
    const especialidad = row.cells[1].innerText;
    const correo = row.cells[2].innerText;
    const telefono = row.cells[3].innerText;

    // Aquí puedes abrir un formulario para editar los datos
    const nuevoNombre = prompt("Edita el nombre:", nombre);
    const nuevaEspecialidad = prompt("Edita la especialidad:", especialidad);
    const nuevoCorreo = prompt("Edita el correo:", correo);
    const nuevoTelefono = prompt("Edita el teléfono:", telefono);

    if (nuevoNombre) row.cells[0].innerText = nuevoNombre;
    if (nuevaEspecialidad) row.cells[1].innerText = nuevaEspecialidad;
    if (nuevoCorreo) row.cells[2].innerText = nuevoCorreo;
    if (nuevoTelefono) row.cells[3].innerText = nuevoTelefono;
}


//<!-- Ventana Emergente (Modal) -->
let filaEditando;

function editarUsuario(element) {
    filaEditando = element.closest('tr');
    const nombre = filaEditando.cells[0].innerText;
    const correo = filaEditando.cells[1].innerText;
    const telefono = filaEditando.cells[2].innerText;

    // Rellena los campos de la modal con los valores actuales
    document.getElementById('nombre').value = nombre;
    document.getElementById('correo').value = correo;
    document.getElementById('telefono').value = telefono;

    // Muestra la modal
    document.getElementById('editModal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('editModal').style.display = 'none';
}

function guardarCambios() {
    const nuevoNombre = document.getElementById('nombre').value;
    const nuevoCorreo = document.getElementById('correo').value;
    const nuevoTelefono = document.getElementById('telefono').value;

    if (nuevoNombre) filaEditando.cells[0].innerText = nuevoNombre;
    if (nuevoCorreo) filaEditando.cells[1].innerText = nuevoCorreo;
    if (nuevoTelefono) filaEditando.cells[2].innerText = nuevoTelefono;

    cerrarModal();
}


