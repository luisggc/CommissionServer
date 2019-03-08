const mongoose = require('mongoose')

const Schema = mongoose.Schema

const assistanceSchema = new Schema({
	userId: String,
	eventId: String,
	type: String,
})

module.exports = mongoose.model('Assistance', assistanceSchema)