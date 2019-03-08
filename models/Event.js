const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
	assistances: [{ type: Schema.Types.ObjectId, ref: 'Assistance' }],
	creator: { type: Schema.Types.ObjectId, ref: 'User' },
	description: { type: String, required: true },
	eventDate: { type: Date, required: true },
	host: { type: String, required: true },
	location: { type: String, required: true },
	name: { type: String, required: true },
	participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	recurrence: { type: Number, required: true },
	startDatetime: { type: String, required: true },
	createdAt: { type: Date, required: true },
})

module.exports = mongoose.model('Event', eventSchema)
