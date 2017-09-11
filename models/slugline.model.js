// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

const ExtInt = ['EXT', 'INT', 'INT./EXT.']
const timeOfDay = ['DAY', 'NIGHT', 'MORNING', 'NOON', 'AFTERNOON', 'EVENING', 'MIDNIGHT']

// define schema
const SluglineSchema = new Schema({
    ExtInt: String,
    location: String,
    timeOfDay: String,
})

// create model from schema
Mongoose.model('Slugline', SluglineSchema)
