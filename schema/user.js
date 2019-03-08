const userType = `
    type User {
        _id: ID!
        name: String!
        age: Int!
        events: [Event]
        assistances: [Assistance]
    }
`

const userMutation = `
	addUser(name: String!, age: Int!, description: String!, aim: String!) : [User]

`

const userQuery = `
    user(_id: ID!): User,
    users: [User]
`

module.exports = { userType, userQuery, userMutation }
