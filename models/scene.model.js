// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

// define schema
const SceneSchema = new Schema({
    name: String,
    notecardText: String,
    treatmentText: String,

    slugline: Object,
    blocks: Array,
})

// create model from schema
Mongoose.model('Scene', SceneSchema)
