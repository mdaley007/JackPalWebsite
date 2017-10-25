// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

// define schema
const SceneSchema = new Schema({
    name: String,
    scenes: Array,
})

// create model from schema
Mongoose.model('Sequence', SceneSchema)
