const { agregarTarea, editarTarea, eliminarTarea, mostrarTareas } = require('./tareas')

console.log('\n\n\n\n\n') // <-- saparadores

agregarTarea('Estudiar NodeJS')
agregarTarea('Bañarme')
mostrarTareas();

console.log('\n') // <-- saparadores
editarTarea(0, 'Estudiar React')
mostrarTareas();

console.log('\n') // <-- saparadores
eliminarTarea(1);
mostrarTareas();



console.log('\n\n\n\n\n') // <-- saparadores
