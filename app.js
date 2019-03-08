const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// allow cross-origin requests
app.use(cors())
mongoose.connect(process.env.MONGOOSE_DB_URL, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
	console.log('connected')
})
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue: resolvers,
		graphiql: true
	})
)

app.listen(4000, () => {
	console.log('now listening for requests on port 4000')
})
