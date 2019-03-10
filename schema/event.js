const eventType = `

    type Location {
        value: [Float!]!
        longitude: Float!
        latitude: Float!
    }

    type Event {
        _id: ID!
        assistances: [Assistance!]!
        creator: User
        description: String!
        duration: Int!
        eventDate: String!
        host: String!
        location: Location
        name: String!
        participants: [User!]!
        recurrence: Int
        createdAt: String!
        updatedAt: String!
    }
`

const eventMutation = `
    addEvent(
        creator: ID!
        description: String!
        duration: Int!
        eventDate: String!
        host: String!
        location: [Float]!
        name: String!
        recurrence: Int!
    ) : Event
`

const eventQuery = `
    event(_id: ID!): Event
    events(location: [Float], radius: Int): [Event]
`

module.exports = { eventType, eventQuery, eventMutation }
