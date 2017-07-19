const storage = require('../util/storage')('local')
import { LOCAL_TODOS_DB } from '../config'

const initState = storage.get(LOCAL_TODOS_DB)

// https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md
// http://cn.redux.js.org/docs/basics/Reducers.html
