// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

type = ['fadeIn', 'transition', 'description', 'speaker', 'parenthetical', 'dialogue', 'subheader']

// define schema
const BlockSchema = new Schema({
    type: String,
    text: String,
})

// create model from schema
Mongoose.model('Block', BlockSchema)
