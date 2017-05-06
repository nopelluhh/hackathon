const Challenge = require('../models/challenge')

module.exports = {
  getAll,
  getMany,
  create
}

function getAll() {
  return Challenge.find({})
}

function getMany(query) {
  return Challenge.find(query)
}

function create(req) {
  let temp = new Challenge(req.body)
  return temp.save()
}
