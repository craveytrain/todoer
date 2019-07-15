import React, { useReducer } from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import { reducer } from './reducers'
import TodoList from './todo-list'
import { toggleTodo } from './actions'

const initialState = [
  {
    title: 'Something',
    id: 1,
    done: false
  },
  {
    title: 'Something else',
    id: 2,
    done: false
  },
  {
    title: 'Even more',
    id: 3,
    done: false
  }
]

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Layout>
      <Router>
        <AppRoute path='/app'>
          <TodoList path='/' todos={state} toggleTodo={id => dispatch(toggleTodo(id))} />
        </AppRoute>
      </Router>
    </Layout>
  )
}

function AppRoute (props) {
  return <div>{props.children}</div>
}

export default App
