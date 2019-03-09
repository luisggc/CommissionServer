const { buildSchema } = require('graphql')
const { assistanceType, assistanceQuery, assistanceMutation } = require('./assistance')
const { userType, userQuery, userMutation } = require('./user')
const { eventType, eventQuery, eventMutation } = require('./event')
const { authType, authQuery, authMutation } = require('./auth')

const Schema = buildSchema(`
	
	${assistanceType}
	${userType}
	${eventType}
	${authType}
	
	type RootQuery {
		${eventQuery}
		${assistanceQuery}
		${userQuery}
		${authQuery}
	}
	
	type MutationQuery {
		${eventMutation}
		${assistanceMutation}
		${userMutation}
		${authMutation}
	}

	schema {
		query: RootQuery,
		mutation: MutationQuery
	}

`)

module.exports = Schema
