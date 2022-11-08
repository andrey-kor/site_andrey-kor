const { Router } = require('express')
const router = Router()

// jadoo.andrey-kor.ru
router.use('/', express.static(path.join(__dirname, 'jadoo')))
 
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'jadoo', 'index.html'))
})

module.exports = router