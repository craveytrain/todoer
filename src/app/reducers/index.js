import {ADD_TODO, DO_TODO, UNDO_TODO, TOGGLE_TODO} from '../actions'

const id = () => Math.floor(Math.random() * 10000000000)

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          title: action.title,
          id: id(),
          done: false
        }
      ]

    case DO_TODO:
      return state.map(t => (action.id !== t.id) ? t : {...t, done: true})

    case UNDO_TODO:
      return state.map(t => (action.id !== t.id) ? t : {...t, done: false})

    case TOGGLE_TODO:
      return state.map(t => (action.id !== t.id) ? t : {...t, done: !t.done})

    default:
      return state
  }
}
