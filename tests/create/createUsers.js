var faker = require('faker/locale/pt_BR')
const { request } = require('graphql-request')

const addUsers = async contUser => {
	const addUser = () => {
		let date = faker.date.past(30)
		let {
			name,
			email,
			avatar,
			dob,
			address: {
				geo: { lat, lng }
			}
		} = faker.helpers.contextualCard()
		let lorem = faker.lorem.sentence
		// console.log(new Date(date).toISOString())

		return `mutation{
        signup(
            birthDate: "${dob}",
            description: "${lorem(60)}",
            email: "${email}",
            aim: "${lorem(20)}",
            name: "${name}",
            password: "${email + '123'}",
            avatar: "${avatar}"
        ){
            _id
		}}`
	}
	let usersId = []
	for (i = 0; i < contUser; i++) {
		userAll = await request(process.env.SERVER_URL, addUser())
		usersId.push(userAll.signup._id)
	}
	return usersId
}
module.exports = addUsers
