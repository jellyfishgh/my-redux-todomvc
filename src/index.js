import './style.css'
import 'todomvc-app-css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import registerServiceWorker from './registerServiceWorker'

import Main from './Main'
// import store from './store'
import reducer from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
