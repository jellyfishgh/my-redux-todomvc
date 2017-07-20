import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from '../../common/TodoTextInput'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }
  handleDoubleClick = () => {
    this.setState({ editing: true })
  }
  handleSave = (id, text) => {
    const { deleteTodo, editTodo } = this.props
    if (text.length === 0) deleteTodo(id)
    else editTodo(id, text)
    this.setState({ editing: false })
  }
  render() {
    const { todo, completeTodo, deleteTodo } = this.props
    const { completed, id, text } = todo
    const { editing } = this.state
    const { handleSave, handleDoubleClick } = this
    return (
      <li
        className={classnames({
          completed,
          editing
        })}
      >
        <div className="view">
          <input
            id={id}
            type="check"
            className="toggle"
            checked={completed}
            onChange={() => completeTodo(id)}
          />
          <label htmlFor={id} onDoubleClick={handleDoubleClick}>
            {text}
          </label>
          <button className="destroy" onClick={() => deleteTodo(id)} />
        </div>
        {editing &&
          <TodoTextInput
            text={text}
            editing={editing}
            onSave={text => handleSave(id, text)}
          />}
      </li>
    )
  }
}
