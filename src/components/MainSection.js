import React from 'react'
import PropTypes from 'prop-types'

import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({ todosCount, completedCount, actions }) => (
  <section className="main">
    {!!todosCount && (
      <span>
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todosCount}
          readOnly
        />

        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
        <label
          onClick={actions.completeAllTodos}
          onKeyPress={actions.completeAllTodos}
        />
      </span>
    )}
    <VisibleTodoList />
    {!!todosCount && (
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    )}
  </section>
)

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
}

export default MainSection
