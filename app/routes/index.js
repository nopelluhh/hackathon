const router = require('express').Router()
const exampleController = require('../controllers/example.controller')
const challengeRoutes = require('./challenge')

router.use('/api/challenge', challengeRoutes)
router.get('/api/ping', exampleController.ping)

// frontend routes =========================================================
// route to handle all angular requests
router.get('*', (req, res) => {
  res.sendfile('./public/dist/index.html')
})

module.exports = router
