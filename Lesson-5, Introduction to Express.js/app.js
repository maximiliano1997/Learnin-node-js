// Importar el modulo Express
const express = require('express')

// Crear una isntancia de la aplicacion Express
const app = express();

// Definir una ruta basica
app.get('/', (req, res) => {
    res.send('Hola mundo!')
});

// Escuchar en el puerto 3000
const puerto = 3000;
app.listen(puerto, () => {
    console.log(`La acplicacion esta escuchando en http://localhost:${puerto}`)
});

// Explicacion del codigo:
// Importamos el módulo Express y creamos una instancia de la aplicación.
// Definimos una ruta básica que responde con "¡Hola, mundo!" cuando se accede a la raíz (/) de la aplicación.
// La aplicación escucha en el puerto 3000.


// MANEJO DE RUTAS EN EXPRESS

// Manejar uan solicitud GET a /usuarios
app.get('/usuarios', (req, res) => {
    res.send('Lista de usuarios');
})


// Manejar una solicitud GET a /usuarios/:id
app.get('/usuarios/:id', (req, res) => {
    const userId = req.params.id;

    res.send(`Detalles del usuario ${userId}`)
})



// MIDDLEWARES EN EXPRESS
// Express utiliza middlewares para realizar tareas entre la recepción de la solicitud y el envío de la respuesta.Pueden realizar funciones como el registro, la autenticación, el manejo de errores, etc.Ejemplo:



app.user((req, res, next) => {
    console.log(`Solicitud recibida en: ${new Date()}`)
    next();
});


// Conclusiones:
// Express.js es una herramienta poderosa para el desarrollo web con Node.js.En esta lección, hemos explorado los conceptos básicos, como la creación de una aplicación, el manejo de rutas y el uso de middlewares.En lecciones posteriores, profundizaremos en temas avanzados y construiremos aplicaciones más complejas. ¡Continúa explorando Express para aprovechar al máximo este framework eficiente!






