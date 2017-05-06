const router = require('express').Router()
const challengeController = require('../controllers/challenge.controller')

router.get('/', challengeController.getAll)
router.get('/field/:field', challengeController.getByField)
router.post('/', challengeController.create)

module.exports = router
