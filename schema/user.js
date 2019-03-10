const userType = `

    type Auth {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

    type User {
        _id: ID!
        assistances: [Assistance!]!
        avatar: String
        birthDate: String!
        description: String!
        email: String!
        aim: String!
        events: [Event!]!
        name: String!
    }
`

const userMutation = `
    signup(
        aim: String
        avatar: String
        birthDate: String!
        description: String!
        email: String!
        name: String!
        password: String!
    ) : User!
`

const userQuery = `
    user(_id: ID!): User,
    users: [User],
    login(
        email: String!
        password: String!
    ): Auth!
`

module.exports = { userType, userQuery, userMutation }
