var faker = require('faker/locale/pt_BR')
const { randomGeo } = require('../utils')

const { request } = require('graphql-request')

const addEvents = async (users, contEvents) => {
	const addEvent = () => {
		const date = faker.date.between(new Date().toISOString(), faker.date.future(0.7))
		const { longitude, latitude } = randomGeo(-22.912011, -43.233616, 40000)
		const { companyName, catchPhrase } = faker.company
		const lorem = faker.lorem.sentence
		const user = users[Math.floor(Math.random() * users.length)]

		return `mutation {
			addEvent(
				creator:"${user}",
				description: "${lorem(40)}",
			  	eventDate:"${date}",
				host: "${companyName()}",
			  	location:[${longitude},${latitude}],
			  	name: "${catchPhrase()}",
			  	recurrence: ${faker.random.number(6)},
			  	duration: ${Math.floor(Math.random() * 180)}
			){
				_id
			}
		  }`
	}
	for (i = 0; i < contEvents; i++) {
		await request(process.env.SERVER_URL, addEvent())
	}
}

module.exports = addEvents
