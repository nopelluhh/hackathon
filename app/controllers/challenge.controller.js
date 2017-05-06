module.exports = {
  getAll,
  create,
  getByField
}

const challengeService = require('../services/challenge.service')

function getAll(req, res) {
  challengeService.getAll()
        .then(docs => {
          res.json(docs)
        })
        .catch(err => {
          res.setStatus(400).send(err)
        })
}

function getByField(req, res) {
  challengeService.getMany({ field: req.params.field })
        .then(docs => {
          res.json(docs)
        })
        .catch(err => {
          res.setStatus(400).send(err)
        })
}

function create(req, res) {
  challengeService.create(req)
        .then(gym => res.json(gym))
        .catch(err => res.json(err))
}
