const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema(
	{
		description: { type: String, required: true },
		duration: { type: Number, required: true },
		eventDate: { type: Date, required: true },
		host: { type: String },
		name: { type: String, required: true },
		recurrence: { type: Number },
		assistances: [{ type: Schema.Types.ObjectId, ref: 'Assistance' }],
		creator: { type: Schema.Types.ObjectId, ref: 'User' },
		location: {
			type: {
				type: String,
				default: 'Point'
			},
			coordinates: {
				type: [Number],
				createIndexes: '2dsphere',
				required: true
			}
		},
		participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Event', eventSchema)
