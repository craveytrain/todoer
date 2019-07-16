export const ADD_TODO = 'ADD_TODO'
export const addTodo = title => ({
  type: ADD_TODO,
  title
})

export const DO_TODO = 'DO_TODO'
export const doTodo = id => ({
  type: DO_TODO,
  id
})

export const UNDO_TODO = 'UNDO_TODO'
export const undoTodo = id => ({
  type: UNDO_TODO,
  id
})

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const SET_STATE = 'SET_STATE'
export const setState = state => ({
  type: SET_STATE,
  state
})
