const path = require('path')
const express = require('express')
const { Router } = require('express')
const router = Router()

// glp.andrey-kor.ru
router.use('/', express.static(path.join(__dirname, '..', 'glp', 'dist')))

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'glp', 'dist', 'index.html'))
})

module.exports = router
