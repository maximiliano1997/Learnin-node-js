// server.js

const http = require('http');

// Crear un servidor HTTP basico
const server = http.createServer((req, res) => {
    //Manejar diferentes rutas

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hola Mundo! \n')
    } else if (req.url == '/saludo') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hola, Bienvenido!\n')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Pagina no encontrada\n')
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

