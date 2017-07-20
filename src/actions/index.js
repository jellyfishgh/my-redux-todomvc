import uuidv1 from 'uuid/v1'

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
  SET_FILTER
} from '../constants/ActionTypes'

export const addTodo = text => ({ type: ADD_TODO, text, id: uuidv1() })
export const deleteTodo = id => ({ type: DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text })
export const completeTodo = id => ({ type: COMPLETE_TODO, id })
export const completeAll = () => ({ type: COMPLETE_ALL })
export const clearCompleted = () => ({ type: CLEAR_COMPLETED })
export const setFilter = filter => ({ type: SET_FILTER, filter })
