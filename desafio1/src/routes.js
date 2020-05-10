const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Maratona Full Cycle 2.0')
})

module.exports = router