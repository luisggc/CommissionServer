const User = require('../models/User')

const userResolver = {
	user: args => {
		return User.findById(args._id)
	},
	users: () => {
		return User.find({})
	}
}

module.exports = userResolver
