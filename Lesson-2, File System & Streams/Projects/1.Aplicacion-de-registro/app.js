// Requiere investigacion adicional long run


const fs = require('fs')
const { Transform } = require('stream')
const { createLogger, format, transports } = require('winston')

// Configuracion del logget de Winston
const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.simple()
    ),
    transports: [
        new transports.File({ filename: 'registro.log' }),
        new transports.Console()
    ]
});

// Stream de tansformacion para dar formato a los eventos antes de escribirlos

class LogTransformer extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        const formattedLog = `[${new Date().toISOString()}] ${chunk}\n`;
        this.push(formattedLog);
        callback();
    }
}

// Crea un stream de escritura
const writeStream = fs.createWriteStream('registro.log', { flag: 'a' });

// Crea un stream de transformacion utilizando nuestro LogTransformer
const logTransformer = new LogTransformer();

// Pipe:  Conecta el stream de transformacion al stream de escritura
logTransformer.pipe(writeStream);


// Funcion para registrar un evento en el log
function logEvent(event) {
    logger.info(event);
}


// Ejemplo de uso:
logEvent('Inicio de la App')
logEvent('Alguna operacion exitosa!')
logEvent('Error: No se puede completar la operacion')

// Cierra los treams al finalizar la aplicacion
writeStream.on('finish', () => {
    console.log('Registro completo. La aplicacion ha terminado')
})

// Finaliza la escritura del Stream
logTransformer.end()