import React, { Component } from 'react'

import App from './containers/App'
import DevTools from './containers/DevTools'

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <App />
        {process.env.NODE_ENV !== 'production' && <DevTools />}
      </div>
    )
  }
}
