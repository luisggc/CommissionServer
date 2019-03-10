require('dotenv').load()
var faker = require('faker/locale/pt_BR')
// const getUsers = require('./get/getUsers')
const createEvents = require('./create/createEvents')
const createUsers = require('./create/createUsers')

const run = async () => {
	const users = await createUsers(40)
	await createEvents(users, 30)
	console.log("feito")
}
run()
