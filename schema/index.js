const { buildSchema } = require('graphql')
const { assistanceType, assistanceQuery, assistanceMutation } = require('./assistance')
const { userType, userQuery, userMutation } = require('./user')
const { eventType, eventQuery, eventMutation } = require('./event')

const Schema = buildSchema(`
	
	${assistanceType}
	${userType}
	${eventType}
	
	type RootQuery {
		${eventQuery}
		${assistanceQuery}
		${userQuery}
	}
	
	type MutationQuery {
		${eventMutation}
		${assistanceMutation}
		${userMutation}
	}

	schema {
		query: RootQuery,
		mutation: MutationQuery
	}

`)

module.exports = Schema
