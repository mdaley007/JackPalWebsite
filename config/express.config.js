// load modules
const BodyParser     = require('body-parser')
const Compression    = require('compression')
const Express        = require('express')
const MethodOverride = require('method-override')
const Morgan         = require('morgan')
const Session        = require('express-session')

// load environment config
const Config = require('./config')

// create & config server
module.exports = function() {

    // create server
    const server = Express()

    // middleware
    if (process.env.NODE_ENV === 'development') {
        server.use(Morgan('dev'))   // HTTP request logger
    } else if (process.env.NODE_ENV === 'production') {
        server.use(Compress())      // compress response data
    }
    server.use(BodyParser.urlencoded( { extended: true } )) // parse request data: URL
    server.use(BodyParser.json())                           // parse request data: JSON
    server.use(MethodOverride())                   // legacy support for PUT and DELETE

    // load session
    server.use(Session({
        saveUninitialized: true,
        resave: true,
        secret: Config.sessionSecret,
    }))

    // load routes
    require('../routes/index.routes')(server)
    require('../routes/productions.routes')(server)
    require('../routes/user.routes')(server)

    // load static files
    server.use(Express.static('../public'))

    // return configured server
    return server;
}
