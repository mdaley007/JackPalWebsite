// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

// define schema
const ProjectSchema = new Schema({
    owner: String,
    projectName: String,
    filename: String,
    
    screenplay: Object,
    campaign: Object,
})

// create model from schema
Mongoose.model('Project', ProjectSchema)
