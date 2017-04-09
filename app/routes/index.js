const router = require('express').Router()
const exampleController = require('../controllers/example.controller')

router.get('/api/ping', exampleController.ping)

// frontend routes =========================================================
// route to handle all angular requests
router.get('*', (req, res) => {
  res.sendfile('./public/index.html')
})

module.exports = router
