// define environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// get db
const db = require('./config/mongoose.config')()

//get server
const server = require('./config/express.config')()
// activate server on port 3000
server.listen(3000)
// notify that server is running
console.log('Jack-Pal-Server running at http://localhost:3000/')

// for testing
module.exports = server
