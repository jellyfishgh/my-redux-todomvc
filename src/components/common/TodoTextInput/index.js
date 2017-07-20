import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { ENTER_KEY_CODE } from '../../../config'

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }
  constructor(props) {
    super(props)
    this.state = {
      text: props.text || ''
    }
  }
  handleBlur = e => {
    const { newTodo, onSave } = this.props
    if (!newTodo) onSave(e.target.value)
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleSubmit = ({ target, which }) => {
    const { newTodo, onSave } = this.props
    const text = target.value.trim()
    if (which === ENTER_KEY_CODE) {
      onSave(text)
      if (newTodo) this.setState({ text: '' })
    }
  }
  render() {
    const { placeholder, editing, newTodo } = this.props
    const { handleBlur, handleChange, handleSubmit } = this
    return (
      <input
        classnames={classnames({
          edit: editing,
          'new-todo': newTodo
        })}
        type="text"
        value={this.state.text}
        placeholder={placeholder}
        autoFocus
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    )
  }
}
