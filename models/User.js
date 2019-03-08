const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
	name: { type: String, required: true },
	birthDate: { type: Date, required: true },
	description: { type: String, required: true },
	aim: { type: String, required: true },
	createdEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
	createdAssistances: [{ type: Schema.Types.ObjectId, ref: 'Assistance' }],
	createdAt: { type: Date, required: true },
})

module.exports = mongoose.model('User', userSchema)
