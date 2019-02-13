import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLInt
} from 'graphql'
import User from '../models/User'
import Event from '../models/Event'
import Assistance from '../models/Assistance'
import _ from 'lodash'

const AssistanceType = new GraphQLObjectType({
	name: 'Assistance',
	fields: () => ({
		id: { type: GraphQLID },
		userId: { type: GraphQLID },
		eventId: { type: GraphQLID },
		type: { type: GraphQLString },
		users: {
			type: new GraphQLList(UserType),
			resolve(parent, args) {
				return User.findById(parent.userId)
				// return users.filter(user => user.id == parent.userId)
			}
		},
		events: {
			type: new GraphQLList(EventType),
			resolve(parent, args) {
				return Event.findById(parent.eventid)
				// return events.filter(event => event.id == parent.eventid)
			}
		}
	})
})
const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		events: {
			type: new GraphQLList(EventType),
			resolve(parent, args) {
				return Event.find({ userId: parent.id })
				// return _.filter(events, { userId: parent.id })
			}
		},
		assistances: {
			type: new GraphQLList(AssistanceType),
			resolve(parent, args) {
				return Assistance.find({ userId: parent.id })
				// return assistances.filter(assistance => assistance.userId == parent.id)
			}
		}
	})
})

const EventType = new GraphQLObjectType({
	name: 'Event',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		host: { type: GraphQLString },
		description: { type: GraphQLString },
		// userId: { type: GraphQLString },
		user: {
			type: UserType,
			resolve(parent, args) {
				return User.findById(parent.userId)
				// return _.find(users, { id: parent.id })
			}
		},
		assistances: {
			type: new GraphQLList(AssistanceType),
			resolve(parent, args) {
				return Assistance.find({ eventId: parent.id })
				// return assistances.filter(assistance => assistance.eventId == parent.id)
			}
		}
	})
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return User.findById(args.id)
				// return _.find(users, { id: args.id })
			}
		},
		users: {
			type: new GraphQLList(UserType),
			resolve(parent, args) {
				return User.find({})
			}
		},
		event: {
			type: EventType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Event.findById(args.id)
				// return _.find(events, { id: args.id })
			}
		},
		events: {
			type: new GraphQLList(EventType),
			resolve(parent, args) {
				return Event.find({})
				// return events
			}
		},
		assistance: {
			type: AssistanceType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Assistance.findById(args.id)
				// return _.find(assistances, { id: args.id })
			}
		},
		assistances: {
			type: new GraphQLList(AssistanceType),
			resolve(parent, args) {
				return Assistance.find({})
				// return assistances
			}
		}
	}
})

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		addUser: {
			type: UserType,
			args: {
				id: { type: GraphQLString },
				name: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) },
				description: { type: new GraphQLNonNull(GraphQLString) },
				aim: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parent, args) {
				let user = new User(args)
				return user.save()
			}
		},
		addEvent: {
			type: EventType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				description: { type: new GraphQLNonNull(GraphQLString) },
				host: { type: new GraphQLNonNull(GraphQLString) },
				userId: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parent, args) {
				let event = new Event(args)
				return event.save()
			}
		},
		addAssistance: {
			type: AssistanceType,
			args: {
				userId: { type: new GraphQLNonNull(GraphQLString) },
				eventId: { type: new GraphQLNonNull(GraphQLString) },
				type: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parent, args) {
				let assistance = new Assistance(args)
				return assistance.save()
			}
		}
	})
})

export default new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
})
