const eventType = `
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
`

const eventMutation = `
    addEvent(name: String!, description: String!, location: String!, host: String!) : [Event]
`

const eventQuery = `
    event(_id: ID!): Event
    events: [Event]
`

module.exports = { eventType, eventQuery, eventMutation }
