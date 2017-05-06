const mongoose = require('mongoose')
const Schema = mongoose.Schema

const challengeSchema = new Schema({
  name: {
    type: String
  }
})

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Challenge', challengeSchema)
