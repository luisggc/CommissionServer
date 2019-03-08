const User = require('../../models/User')
const Event = require('../../models/Event')
const Assistance = require('../../models/Assistance')

module.exports = {
	addUser: (args) => {
		let user = new User(args)
		return user.save()
	},
	addEvent: (args) => {
		let event = new Event(args)
		return event.save()
	},
	addAssistance: (args) => {
		let assistance = new Assistance(args)
		return assistance.save()
	}
}
