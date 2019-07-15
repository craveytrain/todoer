import React from 'react'

const Todo = ({todo, toggleTodo}) => {
  return (<li><input type='checkbox' checked={todo.done} onChange={() => { toggleTodo(todo.id) }} />{todo.title}</li>)
}

export default Todo
