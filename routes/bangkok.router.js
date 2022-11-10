const path = require('path')
const express = require('express')
const { Router } = require('express')
const router = Router()

// bangkok.andrey-kor.ru
router.use('/', express.static(path.join(__dirname, '..', 'bangkok', 'dist')))

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'bangkok', 'dist', 'index.html'))
})

module.exports = router
