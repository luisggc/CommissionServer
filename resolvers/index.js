const userResolver = require('./user')
const eventResolver = require('./event')
const assistanceResolver = require('./assistance')
const authResolver = require('./auth')

module.exports = { ...userResolver, ...eventResolver, ...assistanceResolver, ...authResolver }
