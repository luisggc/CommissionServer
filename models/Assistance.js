const mongoose = require('mongoose')

const Schema = mongoose.Schema

const assistanceSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	event: { type: Schema.Types.ObjectId, ref: 'Event' },
	type: { type: String, required: true},
	createdAt: { type: Date, required: true },
})

module.exports = mongoose.model('Assistance', assistanceSchema)