import mongoose from 'mongoose'
const Schema = mongoose.Schema

const eventSchema = new Schema({
	name: String,
	host: String,
	description: String,
	userId: String
})

export default mongoose.model('Event', eventSchema)
