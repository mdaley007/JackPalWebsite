// define environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// create server
const server = require('./config/express')()
// activate server
server.listen(3000)
// notify that server is running
console.log('Jack-Pal-Server running at http://localhost:3000/')

// for testing
module.exports = server
