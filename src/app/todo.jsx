import React, { useContext } from 'react'
import { toggleTodo } from './actions'
import { TodosDispatch } from './app'

const Todo = ({todo}) => {
  const dispatch = useContext(TodosDispatch)

  return (<li><input type='checkbox' checked={todo.done} onChange={() => dispatch(toggleTodo(todo.id))} />{todo.title}</li>)
}

export default Todo
