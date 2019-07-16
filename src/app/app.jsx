import React, { useReducer, createContext, useEffect } from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import { reducer } from './reducers'
import TodoList from './todo-list'
import { setState } from './actions'

const sumpin = [
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

export const TodosDispatch = createContext(null)

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    setTimeout(() => dispatch(setState(sumpin)), 3000)
  }, [])

  return (
    <TodosDispatch.Provider value={dispatch}>
      <Layout>
        <Router>
          <AppRoute path='/app'>
            <TodoList path='/' todos={state} />
          </AppRoute>
        </Router>
      </Layout>
    </TodosDispatch.Provider>
  )
}

function AppRoute (props) {
  return <div>{props.children}</div>
}

export default App
