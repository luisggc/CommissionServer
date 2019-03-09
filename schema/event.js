const eventType = `
    type Event {
        _id: ID!
        assistances: [Assistance!]!
        creator: User
        description: String!
        eventDate: String!
        host: String!
        location: String!
        name: String!
        participants: [User!]!
        recurrence: Int!

        createdAt: String!
        updatedAt: String!
    }
`

const eventMutation = `
    addEvent(
        creator: ID!
        description: String!
        eventDate: String!
        host: String!
        location: String!
        name: String!
        recurrence: Int!
    ) : [Event]
`

const eventQuery = `
    event(_id: ID!): Event
    events: [Event]
`

module.exports = { eventType, eventQuery, eventMutation }
