// modules =================================================
const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// configuration ===========================================

// set our port
var port = process.env.PORT || 8080

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in .env file)
//mongoose.connect(process.env.DB_URL); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json())

// parse application/vnd.api+json see jsonapi.org
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'))

// set the static files location
app.use(express.static(__dirname + '/public'))

// routes ==================================================
app.use(require('./app/routes')) // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port, () => {
    console.log(`Magic happens on port ${port}`)
})