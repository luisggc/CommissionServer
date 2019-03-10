var faker = require('faker/locale/pt_BR')
const { request } = require('graphql-request')

const run = async (contUser) => {
	const addEvent = () => {
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
		}`

	}
	for (i = 0; i < contUser; i++) {
		await request(process.env.SERVER_URL, signup())
	}
}

modules.export = run