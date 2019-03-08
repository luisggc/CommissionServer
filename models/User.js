const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
	name: String,
	age: Number,
	description: String,
	aim: String
})

module.exports = mongoose.model('User', userSchema)
