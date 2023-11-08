const tareas = [];

function agregarTarea(tarea) {
    tareas.push(tarea);
    console.log(`Tarea "${tarea}" agregada.`)
}

function editarTarea(indice, nuevaTarea) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice] = nuevaTarea;
        console.log(`Tarea "${indice}" editada.`)
    } else {
        console.log('Indice de tarea invalido.')
    }
}

function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        const tareaEliminada = tareas.splice(indice, 1);
        console.log(`Tarea "${tareaEliminada}" eliminada.`)
    } else {
        console.log('Indice de taera invalido.')
    }
}

function mostrarTareas() {
    console.log('Lista de Tareas: ');
    tareas.forEach((tarea, indice) => {
        console.log(`${indice + 1}. ${tarea}`);
    });
}

module.exports = {
    agregarTarea,
    editarTarea,
    eliminarTarea,
    mostrarTareas
};