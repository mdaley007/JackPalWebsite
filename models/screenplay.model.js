// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

// define schema
const ScreenplaySchema = new Schema({
    title: String,
    synopsisText: String,
    sequences: Array,
    research: Array,
})

// create model from schema
Mongoose.model('Screenplay', ScreenplaySchema)
