import React from 'react'
import Todo from './todo'

const TodoList = ({todos}) => <ul>{todos.map(t => <Todo key={t.id} todo={t} />)}</ul>

export default TodoList
