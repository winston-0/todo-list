import React from 'react'

import Task from '../Task/Task'

export default function TaskList({ data, onDeleteTask, onMarkDoneTask, onEdit }) {
  let tasks = data.map((el) => {
    const { id, ...otherProps } = el
    return (
      <Task
        {...otherProps}
        key={id}
        id={id}
        onDeleteTask={() => onDeleteTask(el.id)}
        onMarkDoneTask={() => onMarkDoneTask(el.id)}
        onEdit={onEdit}
      />
    )
  })
  return <ul className="todo-list">{tasks}</ul>
}
