import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TodoTextInput = ({ editing, newTodo, text, placeholder, onSave }) => {
  const [value, setValue] = useState(text || '')

  const handleSubmit = (e) => {
    const val = e.target.value.trim()
    if (e.which === 13) {
      onSave(val)
      if (newTodo) {
        setValue('')
      }
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleBlur = (e) => {
    if (!newTodo) {
      onSave(e.target.value)
    }
  }

  return (
    <input
      className={classnames({
        edit: editing,
        'new-todo': newTodo,
      })}
      type="text"
      placeholder={placeholder}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  )
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool,
}

TodoTextInput.defaultProps = {
  text: '',
  placeholder: '',
  editing: false,
  newTodo: false,
}

export default TodoTextInput
