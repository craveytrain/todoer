const { gql } = require('apollo-server-lambda')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type Todo {
		title: String!
		completed: Boolean
	}

	type Query {
		allTodos: [Todo!]
		todo(id: ID): Todo!
	}
`

module.exports = typeDefs
