const { crearCarpeta, moverArchivo, copiarArchivo, eliminarArchivo, eliminarCarpeta } = require('./gestionArchivos');

// crearCarpeta('nueva_carpeta')
// moverArchivo('archivo.txt', 'nueva_carpeta/archivo.txt')
// copiarArchivo('nueva_carpeta/archivo.txt', 'copia_archivo.txt')
// eliminarArchivo('copia_archivo.txt')
eliminarCarpeta('nueva_carpeta')