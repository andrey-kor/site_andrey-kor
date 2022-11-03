const { Router } = require('express')
const Article = require('../models/Article')
const router = Router()

// /api/getarticles
router.get('/', async (req, res) => {
    try{
        const articles = await Article.find({})
        res.json(articles)
    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    } 
})

// /api/getarticles/:id
router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id)
        res.json(article)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router