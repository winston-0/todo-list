import { React, useState } from 'react'

export function NewTaskForm({ onAddTask }) {
  const [value, setValue] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const changeValue = (e) => {
    setValue(e.target.value)
  }
  const changeSeconds = (e) => {
    setSec(e.target.value)
  }
  const changeMinutes = (e) => {
    setMin(e.target.value)
  }
  const completeState = { value, min, sec }
  return (
    <form
      className="new-todo-form"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onAddTask(completeState)
          setValue('')
          setMin('')
          setSec('')
        }
      }}
    >
      <input
        value={value}
        onChange={changeValue}
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      ></input>
      <input onChange={changeMinutes} value={min} className="new-todo-form__timer" placeholder="min" />
      <input value={sec} onChange={changeSeconds} className="new-todo-form__timer" placeholder="sec" />
    </form>
  )
}
