const Event = require('../models/Event')
const { dateFormation } = require('../helpers/date')
const { locationToLatLong, convertLatLongtoDB, getDistance } = require('../helpers/geolocation')

const eventModifier = async singleEvent => {
	// const events = singleEvent.populate('creator')
	return dateFormation(locationToLatLong(singleEvent._doc))
}

const eventResolver = {
	event: async args => {
		const event = await Event.findById(args._id)
		return event ? eventModifier(event) : event
	},
	events: async ({ location, radius }) => {
		let events
		const maxDistance = radius ? {$maxDistance: radius} : {}
		


		if (!location) {
			events = await Event.find({})
		} else {
			events = await Event.find({
				location: {
					$near: {
						$geometry: {
							type: 'Point',
							coordinates: location
						},
						...maxDistance
					}
				}
			})

			events = events.map(event => {
				return {
					...event,
					_doc: {
						...event._doc,
						distance: getDistance(location, event._doc.location.coordinates)
					}
				}
			})
		}
		return await events.map(eventModifier)
	},
	addEvent: async args => {
		let event = new Event(convertLatLongtoDB(args))
		event = await event.save()
		return eventModifier(event)
	}
}

module.exports = eventResolver
