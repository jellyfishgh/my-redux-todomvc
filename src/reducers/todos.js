import { LOCAL_TODOS_DB } from '../config'
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../constants/ActionTypes'
import { ldb } from '../util/storage'

const initState = ldb.get(LOCAL_TODOS_DB, [])

export default (state = initState, { type, id, text }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, { id, text, completed: false }]
    case DELETE_TODO:
      return state.filter(todo => todo.id !== id)
    case EDIT_TODO:
      return state.map(todo => (todo.id === id ? { ...todo, text } : todo))
    case COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    case COMPLETE_ALL:
      return state.map(todo => ({
        ...todo,
        completed: !state.every(({ completed }) => completed)
      }))
    case CLEAR_COMPLETED:
      return state.filter(({ completed }) => !completed)
    default:
      return state
  }
}
