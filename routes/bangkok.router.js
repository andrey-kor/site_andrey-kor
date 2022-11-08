const { Router } = require('express')
const router = Router()

// bangkok.andrey-kor.ru
router.use('/', express.static(path.join(__dirname, 'bangkok')))
 
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'bangkok', 'index.html'))
})

module.exports = router