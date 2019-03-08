import User from '../../models/User'
import Event from '../../models/Event'
import Assistance from '../../models/Assistance'

export default {
	addUser: (args) => {
		let user = new User(args)
		return user.save()
	},
	addEvent: (args) => {
		let event = new Event(args)
		return event.save()
	},
	addAssistance: (args) => {
		let assistance = new Assistance(args)
		return assistance.save()
	}
}
