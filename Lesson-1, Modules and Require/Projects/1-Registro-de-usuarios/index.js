const { registrarUsuario, autenticarUsuario } = require('./usuarios')
const prompt = require('prompt-sync')({ sigint: true })

console.log('Registrarse: ')
const nombreUsuario = prompt('Ingresa Usuario: ')
const contraseñaUsuario = prompt('Ingresa Contraseña: ')

registrarUsuario(nombreUsuario, contraseñaUsuario)

if (autenticarUsuario(nombreUsuario, contraseñaUsuario)) {
    console.log(`Bienvenido, ${nombreUsuario}!`)
} else {
    console.log('Credenciales incorrectas. Acceso denegado.')
}

console.log('\n\n\n\n\n') // <-- saparadores
