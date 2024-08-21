const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const validUrl = require('valid-url')
const shortid = require('shortid')
const path = require('path')

const PORT = process.env | 3000

const app = express()

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/',express.static('public'))  // Recomandado para proyectos chicos 
app.use('/', express.static(path.join(__dirname + '/public'))) // Recomendado para proyecto grandes


// Connection MongoDB
mongoose.connect('mongodb+srv://aguerima:genesis12@cluster0.rybbjb7.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
    .then((success) => console.log('conexion exitosa'))
    .catch((err) => console.error(err))
// Solution


// URL Schema       
const urlSchema = new mongoose.Schema({
    original_url: String,
    short_url: String
})


// URL Model
const Url = mongoose.model('Url', urlSchema)


// Routes

app.get('/', (req, res) => {
    res.sendFile('index.html')
})




// Shorten URL
app.post('/api/shorturl', async (req, res) => {
    const originalUrl = req.body.url
    console.log(originalUrl)

    // Check URL is valid
    if (!validUrl.isUri(originalUrl)) {
        return res.status(400).json({ error: 'Invalid URL' })
    }

    try {
        let url = await Url.findOne({ original_url: originalUrl })

        // If URL do not exist, create a new one
        if (!url) {
            const shortUrl = (shortid.generate());
            const newUrl = { original_url: originalUrl, short_url: shortUrl }
            url = await Url.create(newUrl)
        }

        res.json({ original_url: url.original_url, short_url: url.short_url })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server Error' })
    }
});


// Redirect to original URL
app.get('/api/shorturl/:short_url', async (req, res) => {
    try {
        const url = await Url.findOne({ short_url: req.params.short_url });
        if (!url) {
            return res.status(400).json({ error: 'URL not found' })
        }
        res.redirect(url.original_url);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server Error...' })
    }
})









app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})