// load modules
const BodyParser     = require('body-parser')
const Compression    = require('compression')
const Express        = require('express')
const Redirect       = require('express-redirect')
const MethodOverride = require('method-override')
const Morgan         = require('morgan')

// load paths
const PATHS = require('../public/paths')
// define shorthand
const Load = Express.static

// create & config server
module.exports = function() {

    // create server
    var server = Express()
    // add redirect capabilities
    Redirect(server)

    // external middleware
    if (process.env.NODE_ENV === 'development') {
        server.use(Morgan('dev'))   // HTTP request logger
    } else if (process.env.NODE_ENV === 'production') {
        server.use(Compress())      // compress response data
    }
    server.use(BodyParser.urlencoded( { extended: true } )) // parse the request body
    server.use(BodyParser.json())                           // parse the request body
    server.use(MethodOverride())    // for client-browsers that don't supt. PUT or DELETE

    // internal middleware
    server.redirect('/', '/productions')
    server.use('/blog',                 Load(PATHS.blog))
    server.use('/construction',         Load(PATHS.construction))
    server.use('/education',            Load(PATHS.education))
    server.use('/fashion',              Load(PATHS.fashion))
    server.use('/food',                 Load(PATHS.food))
    server.use('/industries',           Load(PATHS.industries))
    server.use('/journalism',           Load(PATHS.journalism))
    server.use('/productions',          Load(PATHS.productions))
    server.use('/productions/actors',   Load(PATHS.actorApp))
    server.use('/productions/campaign', Load(PATHS.campaignApp))
    server.use('/productions/writers',  Load(PATHS.writerApp))
    server.use('/software',             Load(PATHS.software))
    // handle HTTP status code 404
//    server.redirect('/productions/*',   Load(PATHS.pageNotFound))
//    server.use('/software',             Load(PATHS.software))
//    server.use('*',                    Load(PATHS.pageNotFound))
    server.get('*', function(req, res, next) {
        res.status(404).send('This is not the page your looking for.')
//        res.status(404).send(PATHS.pageNotFound)
//        res.sendFile(PATHS.pageNotFound)
    })

    // return configured server
    return server;
}
