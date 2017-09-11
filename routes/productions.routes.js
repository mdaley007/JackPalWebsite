// load modules
const Express = require('express')
const Path    = require('path')

// load paths
// const PATHS = require('../public/paths')

module.exports = function(server) {
    const productions = require('../controllers/productions.controller')

    server.route('/productions')
        .get(function(req, res, next) {
            filename  = 'index.html'
            res.sendFile(Path.join(__dirname, '../public/', filename), function(err) {
                if (err) {
                  next(err);
                } else {
                  console.log('Sent:', filename);
                }
            })

        })
}
