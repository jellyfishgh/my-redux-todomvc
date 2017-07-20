import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

import { propTypes } from '../containers/App'

export const propTypes = {
  ...propTypes,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default class MainSection extends Component {
  static propTypes = propTypes
  render() {
    const { todos, actions } = this.props
    return (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={actions.completeAll}
        />
        <ul className="todo-list">
          {todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}
