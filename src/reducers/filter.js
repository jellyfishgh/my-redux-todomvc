import { SESSION_FILTERS_DB } from '../config'
import { SHOW_ALL } from '../constants/TodoFilters'
import { SET_FILTER } from '../constants/ActionTypes'
import { sdb } from '../util/storage'

const initState = sdb.get(SESSION_FILTERS_DB, SHOW_ALL)

export default (state = initState, { type, filter }) => {
  switch (type) {
    case SET_FILTER:
      return filter
    default:
      return state
  }
}
