const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("buttonID");
const contenedorTareas = document.getElementById("listaTareas");


botonAgregar.addEventListener("click", function () {
    const textoTarea = inputTarea.value.trim();
    if (textoTarea !== "") {

        const nuevaTarea = document.createElement("div");
        nuevaTarea.className = "alert alert-secondary d-flex justify-content-between align-items-center";

        const textoSpan = document.createElement("span");
        const numeroTarea = contenedorTareas.children.length + 1;
        textoSpan.textContent = numeroTarea + ". " + textoTarea;
        textoSpan.setAttribute("data-texto", textoTarea);

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn btn-danger btn-sm";
        btnEliminar.addEventListener("click", eliminarTarea);

        nuevaTarea.appendChild(textoSpan);
        nuevaTarea.appendChild(btnEliminar);

        contenedorTareas.appendChild(nuevaTarea);

        inputTarea.value = "";
    }
});

function eliminarTarea(event) {
    // Esto elimina el div padre del botón
    const tareaDiv = event.target.parentNode;
    tareaDiv.remove();
    renumerarTareas();
}

function renumerarTareas() {
    const tareas = contenedorTareas.children;
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        const textoSpan = tarea.querySelector("span");
        const textoSinNumero = textoSpan.getAttribute("data-texto");
        textoSpan.textContent = (i + 1) + ". " + textoSinNumero;
    }
}
