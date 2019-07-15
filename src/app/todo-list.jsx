import React from 'react'
import Todo from './todo'

const TodoList = ({todos, toggleTodo}) => {
  return (<ul>
    {todos.map(t => <Todo key={t.id} todo={t} toggleTodo={toggleTodo} />)}
  </ul>)
}

export default TodoList
