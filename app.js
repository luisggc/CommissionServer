import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import resolvers from './resolvers'
import mongoose from 'mongoose'
import cors from 'cors'
import config from './config/development/secrets'

const app = express()

// allow cross-origin requests
app.use(cors())
mongoose.connect(config.database.mongodb)


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
