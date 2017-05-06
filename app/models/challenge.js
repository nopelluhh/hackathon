const mongoose = require('mongoose')
const Schema = mongoose.Schema

const challengeSchema = new Schema({
  field: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  difficulty: {
    type: Number,
    required: true
  },
  description: String,
  type: {
    type: String,
    enum: ['multi', 'text'],
    required: true
  },
  options: [{
    content: String,
    correct: Boolean,
    _id: false
  }],
  answer: {
    type: String
  }
})

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Challenge', challengeSchema)
