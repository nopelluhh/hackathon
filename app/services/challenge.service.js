const Challenge = require('../models/challenge')

module.exports = {
  getAll,
  create
}

function getAll() {
  return Challenge.find({})
}

function create(req) {
  let temp = new Challenge(req.body)
  return temp.save()
}
