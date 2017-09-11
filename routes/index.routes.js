module.exports = function(server) {
    const index = require('../controllers/index.controller')

    server.route('/')
        .get(function(req, res, next) {
            res.redirect('/productions')
        })
}
