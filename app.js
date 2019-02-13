import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema/schema'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

// allow cross-origin requests
app.use(cors())

mongoose.connect(process.env.REACT_APP_MONGOOSE_DB_URL)


mongoose.connection.once('open', () => {
	console.log('connected')
})
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
)

app.listen(4000, () => {
	console.log('now listening for requests on port 4000')
})
