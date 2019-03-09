const userType = `
    type User {
        _id: ID!
        assistances: [Assistance!]!
        birthDate: String!
        description: String!
        email: String!
        aim: String!
        events: [Event!]!
        name: String!
    }
`

const userMutation = `
	

`

const userQuery = `
    user(_id: ID!): User,
    users: [User]
`

module.exports = { userType, userQuery, userMutation }
