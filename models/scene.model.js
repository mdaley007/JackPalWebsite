// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

// define schema
const SceneSchema = new Schema({
    beats: Array,
    name: String,
    notecardText: String,
    slugline: String,
    stepOutlineText: String,
})

// create model from schema
Mongoose.model('Scene', SceneSchema)
