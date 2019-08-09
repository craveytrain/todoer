import {ADD_TODO, DO_TODO, UNDO_TODO, TOGGLE_TODO, SET_STATE} from '../actions'

const id = () => Math.floor(Math.random() * 10000000000)

export const postState = async (action, state) => fetch('/.netlify/functions/post-state', {
  method: 'POST',
  body: JSON.stringify({action, state})
})

export const reducer = (state, action) => {
  let newState = state

  switch (action.type) {
    case ADD_TODO:
      newState = [
        ...state,
        {
          title: action.title,
          id: id(),
          done: false
        }
      ]
      break

    case DO_TODO:
      newState = state.map(t => (action.id !== t.id) ? t : {...t, done: true})
      break

    case UNDO_TODO:
       newState = state.map(t => (action.id !== t.id) ? t : {...t, done: false})
      break

    case TOGGLE_TODO:
       newState = state.map(t => (action.id !== t.id) ? t : {...t, done: !t.done})
      break

    case SET_STATE:
       newState = action.state
      break

    default:
  }

  postState(action, newState)

  return newState
}
