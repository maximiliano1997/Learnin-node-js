// 3. ** Servidor de Archivos Simple:**
// - Crea un servidor simple que pueda entregar archivos estáticos.Utiliza streams para mejorar la eficiencia en la lectura y entrega de archivos.

const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer((req, res) => {
    // Obten al ruta del archivo solicitado
    const filePath = path.join(__dirname, 'archivos_estaticos', req.url);


    // Crea un stream de lectura desde el archivo
    const readStream = fs.createReadStream(filePath);

    // Maneja eventos de error en el Stream de lectura
    readStream.on('error', (error) => {
        if (error.code === 'ENOENT') {
            // Si el archivo no existe, envia una respuesta 404
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('404 Not Found')
        } else {
            // Si hay otro error, envia una respuesta 505
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('500 Internal Server Error')
        }
    })

    // Maneja eventos de apertura del stream de lectura
    readStream.on('open', () => {
        // Configura las cabeceras de la respuesta
        res.writeHead(200, { 'Content-Type': 'text/plain' })

        //Pipe: Conecta el stream de lectura al stream de escritura de la respuesta
        readStream.pipe(res);
    });

    // Maneja eventos de cierre del stream de lectura
    readStream.on('close', () => {
        // Cierra la respuesta despues de que se haya enviado todo el contenido
        res.end()
    });
});

// Configura el puerto en el que escuchara el Servidor
const port = 3000;

// Inicia el servidor
server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})





// Explained:

// El servidor utiliza el módulo http para crear un servidor HTTP.
// Cuando se realiza una solicitud, el servidor construye la ruta del archivo solicitado concatenando la carpeta de archivos estáticos(archivos_estaticos) con la URL de la solicitud.
// Se crea un stream de lectura(readStream) desde el archivo y se manejan los eventos asociados a la lectura.
// Si el archivo no existe, se envía una respuesta 404. Si hay algún otro error, se envía una respuesta 500.
// Si el archivo existe y se puede abrir, se establecen las cabeceras de la respuesta y se conecta el stream de lectura al stream de escritura de la respuesta(res).
// Cuando se cierra el stream de lectura, se cierra también la respuesta.
// Puedes personalizar la carpeta de archivos estáticos y el puerto según tus necesidades.Asegúrate de tener una carpeta archivos_estaticos con algunos archivos dentro para probar el servidor.