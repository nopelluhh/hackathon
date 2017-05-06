const router = require('express').Router()
const challengeController = require('../controllers/challenge.controller')

router.get('/', challengeController.getAll)
router.post('/', challengeController.create)

module.exports = router
