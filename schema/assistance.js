const assistanceType = `
    type Assistance {
        _id: ID!
        userId: ID!
        eventId: ID!
        type: String!
        users: [User]
        events: [Event]
    }
`

const assistanceMutation = `
    addAssistance(userId: ID!, eventId: ID!, type: String!):[Assistance]
`

const assistanceQuery = `
    assistance(_id: ID!): Assistance
	assistances: [Assistance]
`


module.exports = { assistanceType, assistanceQuery, assistanceMutation }
