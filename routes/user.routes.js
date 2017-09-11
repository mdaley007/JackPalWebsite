const Users = require('../controllers/user.controller')

module.exports = function(server) {

    server.route('/users')
        .post(Users.create)

}
