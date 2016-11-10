const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exampleSchema = new Schema({
  name: String,
  email: String,
  age: Number
})
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Example', exampleSchema)
