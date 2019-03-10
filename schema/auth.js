const authType = `
    type Auth {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }
`

const authMutation = `
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

const authQuery = `
    login(
        email: String!
        password: String!
    ): Auth!
`

module.exports = { authType, authQuery, authMutation }
