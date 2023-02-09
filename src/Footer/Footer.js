import React from 'react'

import TaskFilter from '../TaskFilter/TaskFilter'

export default function Footer({ remainingTasks, onFilter, deleteCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{remainingTasks()} items left</span>
      <TaskFilter onFilter={onFilter} />
      <button onClick={deleteCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}
