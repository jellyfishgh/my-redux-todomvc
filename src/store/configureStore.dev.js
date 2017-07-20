import { createStore, applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools'

import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const enhancer = compose(
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return matches && matches.length > 0 ? matches[1] : null
}

const store = createStore(rootReducer, undefined, enhancer)
if (module.hot) {
  module.hot.accept('../reducers', () =>
    store.replaceReducer(require('../reducers'))
  )
}
export default store
