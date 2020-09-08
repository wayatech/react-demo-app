import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TodoTextInput from './TodoTextInput'

const TodoItem = ({ todo, completeTodo, deleteTodo, editTodo }) => {
  const [editing, setEditing] = useState(false)

  const handleDoubleClick = () => {
    setEditing(true)
  }

  const handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo(id)
    } else {
      editTodo(id, text)
    }
    setEditing(false)
  }

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing,
      })}
    >
      {editing ? (
        <TodoTextInput
          text={todo.text}
          editing
          onSave={(text) => handleSave(todo.id, text)}
        />
      ) : (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
          <button
            type="button"
            className="destroy"
            aria-label={`Delete ${todo.text}`}
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      )}
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
}

export default TodoItem
