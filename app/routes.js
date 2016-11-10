const router = require('express').Router()
const exampleController = require('./controllers/example.controller')

router.get('/api/ping', exampleController.ping)

// frontend routes =========================================================

// route to handle all angular requests
router.get('*', function (req, res) {
  res.sendfile('./public/views/index.html')
})

module.exports = router