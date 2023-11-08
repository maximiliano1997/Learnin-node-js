const http = require('http')
const dittoJSON = require('./pokemon/ditto.json')
const fs = require('fs')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf8')
          return res.end(JSON.stringify(dittoJSON))
        case '/': // Si alguien va a la raíz del servidor
          fs.readFile('index.html', (err, data) => {
            if (err) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'text/html; charset=utf8')
              return res.end('<h1>500 Internal Server Error</h1>')
            }
            res.setHeader('Content-Type', 'text/html; charset=utf8')
            res.end(data)
          })
          break
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf8')
          return res.end('<h1>404</h1>')
      }

    // eslint-disable-next-line no-fallthrough
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          // escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)

            // llamar a una base de datos para guardar la info
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf8' })

            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break
        }
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('Server listening on http://localhost:1234')
})
