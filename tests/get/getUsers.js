const { request } = require('graphql-request')

const getUsers = async () => {
	const query = `{
        users{
            _id
        }
    }`
    userObject = await request(process.env.SERVER_URL, query)
    return userObject.users.reduce((acc, value) => {
        acc.push(value._id)
        return acc
    }, [])
}

module.exports = getUsers
