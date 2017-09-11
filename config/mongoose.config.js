// load module
const Mongoose = require('mongoose')

// load environment configuration
const Config = require('./config')

module.exports = function() {

    // connect to db
    const db = Mongoose.connect(Config.db, {useMongoClient: true} )

    // load Models
    require('../models/block.model')
    require('../models/project.model')
    require('../models/scene.model')
    require('../models/screenplay.model')
    require('../models/slugline.model')
    require('../models/user.model')

    return db
}
