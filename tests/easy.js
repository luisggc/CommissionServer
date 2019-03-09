const EasyGraphQLTester = require('easygraphql-tester')
const schema = require('../schema')
const resolvers = require('./resolvers')

const tester = new EasyGraphQLTester(schema, resolvers)