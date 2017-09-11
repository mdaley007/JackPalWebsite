// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

// define schema
const ScreenplaySchema = new Schema({
    acts: Array,
    premise: String,
    scenes: Array,
    sequences: Array,
    synopsis: String,
    title: String,
})

// create model from schema
Mongoose.model('Screenplay', ScreenplaySchema)
