import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../../constants/TodoFilters'

import { propTypes } from '../containers/App'

const FILTER_ENUM = [SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE]
const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_COMPLETED]: 'Completed',
  [SHOW_ACTIVE]: 'Active'
}

export const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: ({ completed }) => completed,
  [SHOW_ACTIVE]: ({ completed }) => !completed
}

export const filterPropTypes = {
  filter: PropTypes.oneOf(FILTER_ENUM)
}

export default class Footer extends Component {
  static propTypes = {
    clearCompleted: PropTypes.func.isRequired,
    setShowFilter: PropTypes.func.isRequired,
    activeCount: PropTypes.number,
    ...filterPropTypes,
    ...propTypes
  }
  render() {
    const {
      activeCount,
      completedCount,
      filter,
      setShowFilter,
      clearCompleted
    } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount || 'No'}</strong> item{activeCount === 1 ? 's' : ''}{' '}
          left
        </span>
        <ul className="filters">
          {FILTER_ENUM.map(f =>
            <li key={f}>
              <a
                className={classnames({ selected: f === filter })}
                style={{ cursor: 'pointer' }}
                href="javascript;"
                onClick={() => setShowFilter(f)}
              >
                FILTER_TITLES[f]
              </a>
            </li>
          )}
        </ul>
        {completedCount &&
          <button className="clear-completed" onClick={clearCompleted}>
            clear completed
          </button>}
      </footer>
    )
  }
}
