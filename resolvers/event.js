const Event = require('../models/Event')

const eventResolver = {
	event: args => {
		return Event.findById(args.id)
	},
	events: () => {
		return Event.find({})
	},
	addEvent: args => {
		let event = new Event(args)
		return event.save()
	}
}

module.exports = eventResolver
