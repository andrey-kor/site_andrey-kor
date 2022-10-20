const path = require('path')
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/articles', require('./routes/article.routes'))

const PORT = config.get('port') || 5000

// app.set('view engine', 'ejs')

mongoose
    .connect(config.get('mongoUri'), { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log('Connected to DB')
    })
    .then(() => {
        app.listen(PORT, (error) => {
            error ? console.log(error) : console.log(`The server has been started. Port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })

// const createPath = (page) => path.resolve(__dirname, './dist', `${page}.html`)

// app.get('/', (req, res) => {
//     res.sendFile(createPath('index'))
// })

// app.get('/projects', (req, res) => {
//     res.sendFile(createPath('projects'))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(createPath('about'))
// })

// app.get('/articles', (req, res) => {
//     res.redirect(301, '/articles/frontend-way')
// })

// app.get("/articles/:link", (req, res) => {
//     const article = req.params.link
//     res.render(createEjsPath('articles'), { article })
// })

// app.use((req, res) => {
//     res
//         .status(404)
//         .sendFile(createPath('404'))
//     })