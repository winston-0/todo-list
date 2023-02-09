import React from 'react'

import { NewTaskForm } from '../NewTaskForm/NewTaskForm'

export default function Header({ onAddTask }) {
  return (
    <header>
      <h1>todos</h1>
      <NewTaskForm onAddTask={onAddTask} />
    </header>
  )
}
