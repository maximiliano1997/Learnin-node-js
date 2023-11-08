const usuarios = [];

function registrarUsuario(nombre, contraseña) {
    usuarios.push({ nombre, contraseña })
    console.log(`Usuario ${nombre} registrado con exito.`)
}


function autenticarUsuario(nombre, contraseña) {
    const auth = usuarios.find((user) => user.nombre == nombre && user.contraseña == contraseña)
    // console.log(usuarios)
    return auth ? true : false;
}

console.log('\n\n\n\n\n') // <-- saparadores



module.exports = {
    registrarUsuario,
    autenticarUsuario
}