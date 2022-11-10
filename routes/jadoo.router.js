const path = require('path')
const express = require('express')
const { Router } = require('express')
const router = Router()

// jadoo.andrey-kor.ru
router.use('/', express.static(path.join(__dirname, '..', 'jadoo', 'src')))

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'jadoo', 'src', 'index.html'))
})

module.exports = router
