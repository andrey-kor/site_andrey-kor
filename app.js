const path = require('path')
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/articles', require('./routes/article.routes'))

if (process.env.NODE_ENV === 'production') {

    if (req.headers.host === 'jadoo.andrey-kor.ru') {
        app.use('/', express.static(path.join(__dirname, 'jadoo')))
        
        app.get('*', (req,res) => {
            res.sendFile(path.resolve(__dirname, 'jadoo', 'index.html'))
        })
    }

    else if (req.headers.host === 'bangkok.andrey-kor.ru') {
        app.use('/', express.static(path.join(__dirname, 'bangkok')))
        
        app.get('*', (req,res) => {
            res.sendFile(path.resolve(__dirname, 'bangkok', 'index.html'))
        })
    }

    else {
        app.use('/', express.static(path.join(__dirname, 'client', 'build')))

        app.get('*', (req,res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        })
    }    
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