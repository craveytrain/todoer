import React, { useReducer, createContext, useEffect } from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import { reducer } from './reducers'
import TodoList from './todo-list'
import { setState } from './actions'

export const TodosDispatch = createContext(null)

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    fetch('/.netlify/functions/get-state')
      .then(response => response.json())
      .then(data => dispatch(setState(data)))
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

const AppRoute = ({children}) => <>{children}</>

export default App
