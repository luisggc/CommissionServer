const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		birthDate: { type: Date, required: true },
		description: { type: String, required: true },
		email: { type: String, required: true },
		name: { type: String, required: true },
		password: { type: String, required: true },
		aim: { type: String, max: 26 },
		createdEvents: [{ type: Schema.Types.ObjectId, ref: 'Event', autopopulate: true }],
		createdAssistances: [{ type: Schema.Types.ObjectId, ref: 'Assistance', autopopulate: true }],
		avatar: String,
		lastLocation: {
			type: { type: String },
			coordinates: [Number]
		}
	},
	{ timestamps: true }
)

userSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('User', userSchema)
