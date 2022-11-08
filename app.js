const path = require('path')
const express = require('express')
const subdomain = require('express-subdomain');
const config = require('config')
const mongoose = require('mongoose')
const app = express()

app.use(express.json({ extended: true }))

app.use('/api/articles', require('./routes/article.routes'))

if (process.env.NODE_ENV === 'production') {

    app.use(subdomain('jadoo', require('./routes/jadoo.router')))
    app.use(subdomain('bangkok', require('./routes/bangkok.router')))
    
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
    
}

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server error: ', e.message);
        process.exit(1)
    }
}

start()