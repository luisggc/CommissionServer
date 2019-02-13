import mongoose from 'mongoose'
const Schema = mongoose.Schema

const assistanceSchema = new Schema({
	userId: String,
	eventId: String,
	type: String,
})

export default mongoose.model('Assistance', assistanceSchema)