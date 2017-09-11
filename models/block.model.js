// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

blockType = ['fadeIn', 'transition', 'slugline', 'description', 'speaker', 'parenthetical', 'dialogue', 'subheader']

// define schema
const BlockSchema = new Schema({
    blockType: String,
    text: String,    
})

// create model from schema
Mongoose.model('Block', BlockSchema)
