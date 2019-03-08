import User from '../../models/User'
import Event from '../../models/Event'
import Assistance from '../../models/Assistance'

const queries = {
	user: (args) => {
		return User.findById(args._id)
	},
	users: () => {
		return User.find({})
	},
	event: (args) => {
		return Event.findById(args.id)
	},
	events: () => {
		return Event.find({})
	},
	assistance: (args) => {
		return Assistance.findById(args.id)
	},
	assistances: () => {
		return Assistance.find({})
	}
}

export default queries