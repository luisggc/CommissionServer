require('dotenv').load()
var faker = require('faker/locale/pt_BR')
const getUsers = require('./get/getUsers')
const createEvents = require('./create/createEvents')

const run = async () => {
	const users = await getUsers()
    await createEvents(users, 40)
    console.log("feito")
}

run()