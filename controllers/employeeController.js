const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.json('Hello JS World, Hoang Nam')
})

module.exports = router