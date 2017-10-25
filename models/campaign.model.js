// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

// define schema
const SceneSchema = new Schema({
    producer: string,
})

// create model from schema
Mongoose.model('Campaign', SceneSchema)
