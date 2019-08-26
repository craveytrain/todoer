const { ApolloServer } = require('apollo-server-lambda')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
})

exports.handler = server.createHandler()
