import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
	name: String,
	age: Number,
	description: String,
	aim: String
})

export default mongoose.model('User', userSchema)
