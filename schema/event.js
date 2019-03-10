const eventType = `

    type Location {
        coordinates: [Float!]!
        longitude: Float!
        latitude: Float!
    }

    type Event {
        _id: ID!
        avatar: String
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
        distance: Int
        createdAt: String!
        updatedAt: String!
    }
`

const eventMutation = `
    addEvent(
        avatar: String
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
