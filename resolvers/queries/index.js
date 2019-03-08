const User = require('../../models/User')
const Event = require('../../models/Event')
const Assistance = require('../../models/Assistance')

const queries = {
	user: (args) => {
		return User.findById(args._id)
	},
	users: () => {
		return User.find({})
	},
	event: (args) => {
		return Event.findById(args.id)
	},
	events: () => {
		return Event.find({})
	},
	assistance: (args) => {
		return Assistance.findById(args.id)
	},
	assistances: () => {
		return Assistance.find({})
	}
}

module.exports = queries