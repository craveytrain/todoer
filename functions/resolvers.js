const todos = [
	{
		id: '1',
		title: 'First todo',
		completed: false,
	},
	{
		id: '2',
		title: 'Second todo',
		completed: true,
	},
	{
		id: '3',
		title: 'Third todo',
		completed: false,
	},
]

const getTodo = id => todos.find(t => t.id === id)

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		allTodos: () => todos,
		todo: (root, { id }) => getTodo(id),
	},
	Todo: {
		title: ({ id }) => getTodo(id).title,
		completed: ({ id }) => getTodo(id).completed,
	},
}

module.exports = resolvers
