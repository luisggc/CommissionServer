import { buildSchema } from 'graphql'

export default buildSchema(`
	type Assistance {
		_id: ID!
		userId: ID!
		eventId: ID!
		type: String!
		users: [User]
		events: [Event]
	}

	type User {
		_id: ID!
		name: String!
		age: Int!
		events: [Event]
		assistances: [Assistance]
	}

	type Event {
		_id: ID!
		name: String!
		description: String!
		location: String!
		host: String!
		assistances: [Assistance]
		datetimeStart: String!
		duration: Int!
		recurrence: String!
		users: [User]
	}
	
	type RootQuery {
		user(_id: ID!): User,
		users: [User]
		event(_id: ID!): Event
		events: [Event]
		assistance(_id: ID!): Assistance
		assistances: [Assistance]
	}
	type MutationQuery {
		addUser(name: String!, age: Int!, description: String!, aim: String!) : [User]
		addEvent(name: String!, description: String!, location: String!, host: String!,
			datetimeStart: String!, duration: Int!, reccurrence: String!, userId: ID!) : [Event]
		addAssistance(userId: ID!, eventId: ID!, type: String!):[Assistance]
	}

	schema {
		query: RootQuery,
		mutation: MutationQuery
	}

`)
