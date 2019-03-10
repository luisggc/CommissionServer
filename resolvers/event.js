const Event = require('../models/Event')
const { dateFormation } = require('../helpers/date')
const { locationToLatLong, convertLatLongtoDB } = require('../helpers/geolocation')

const eventModifier = event => {
	return dateFormation(locationToLatLong(event._doc))
}

const eventResolver = {
	event: args => {
		return Event.findById(args.id)
	},
	events: async ({ location, radius }) => {
		console.log('entrooooou')
		let events
		if (!location) {
			events = await Event.find({})
		} else {
			events = await Event.find({
				location: {
					$near: {
						$geometry: {
							type: 'Point',
							coordinates: location,
						},
						$maxDistance: "0.1",
					},
				}
			})
		}
		return events.map(eventModifier)
	},
	addEvent: async args => {
		let event = new Event(convertLatLongtoDB(args))
		event = await event.save()
		return eventModifier(event)
	}
}

module.exports = eventResolver
