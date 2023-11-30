const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const crypto = require('crypto');
const { body, validationResult } = require('express-validator');
const fs = require('fs/promises');


const app = express();
const port = 3000;


// Configuracion del middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));


// Configuracion de sesiones
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: true
}));


// Carpeta para almacenar archivos de usuario
const usuariosFolderPath = path.join(__dirname, 'usuarios');


// Cinfiguracion de la vista
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Ruta para la pagina de inicio
app.get('/', (req, res) => {
    res.render('formulario')
});


// Ruta para procesar el formulario de registro con validacion
app.post('/registro',
    [
        body('nombre').notEmpty().trim().escape(),
        body('correo').isEmail().normalizeEmail(),
        body('contraseña').isLength({ min: 6 }).trim()
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { nombre, correo, contraseña } = req.body;

        try {
            const hashedPassword = crypto.createHash('sha256').update(contraseña).digest('hex');

            const usuario = {
                nombre,
                correo,
                contraseña: hashedPassword
            };

            // Crear un archivo para el usuario
            const fileName = `${usuario.correo}.json`;
            const filePath = path.join(usuariosFolderPath, fileName);
            await fs.writeFile(filePath, JSON.stringify(usuario, null, 2));

            // Crear o actualizar informacion de sesion
            req.session.user = {
                nombre,
                correo
            };

            // Redirigir a una pagina de exito o error
            res.redirect('/exito');
        } catch (error) {
            console.error('Error al procesar el registro: ', error);
            res.status(500).send('Error interno del servidor');
        }
    }
)

// Ruta para la pagina de exito
app.get('/exito', (req, res) => {
    // Acceder a la informacion de la sesion
    const usuario = req.session.user;

    if (usuario) {
        res.send(`Registro exitoso. ¡Bienvenido, ${usuario.nombre}`);
    } else {
        res.redirect('/');
    }
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(400).send('Pagina no encontrada');
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en ejecucuion en http://localhost:${port}`);
});





