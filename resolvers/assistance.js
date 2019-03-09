const Assistance = require('../models/Assistance')

const assistanceResolver = {
	assistance: args => {
		return Assistance.findById(args.id)
	},
	assistances: () => {
		return Assistance.find({})
	},
	addAssistance: args => {
		let assistance = new Assistance(args)
		return assistance.save()
	}
}

module.exports = assistanceResolver
