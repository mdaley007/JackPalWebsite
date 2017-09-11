// load module
const Mongoose = require('mongoose')

// create schema factory
const Schema = Mongoose.Schema

// define schema
const UserSchema = new Schema({
    username: String,
    chapter: String,
    password: String,
})

// create model from schema
Mongoose.model('User', UserSchema)
