const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema(
	{
		description: { type: String, required: true },
		eventDate: { type: Date, required: true },
		host: { type: String, required: true },
		name: { type: String, required: true },
		recurrence: { type: Number, required: true },
		startDatetime: { type: String, required: true },
		assistances: [{ type: Schema.Types.ObjectId, ref: 'Assistance' }],
		creator: { type: Schema.Types.ObjectId, ref: 'User' },
		location: {
			latitude: { type: Number },
			longitude: { type: Number }
		},
		participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Event', eventSchema)
