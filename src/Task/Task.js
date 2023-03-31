import { React, useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { parseISO } from 'date-fns'

import EditTaskField from '../EditTaskField/EditTaskField'
import Timer from '../Timer/Timer'

export default function Task(props) {
  const { value, isDone, onDeleteTask, onMarkDoneTask, onSaveTime, whenCreated, onEdit, id, min, sec } = props

  const [checkboxStatus, setCheckBoxStatus] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editingValue, setEditingValue] = useState(value)

  Task.defaultProps = {
    isDone: false,
    whenCreated: new Date().toISOString(),
  }

  const changeCheckBoxStatus = (e) => {
    setCheckBoxStatus(e.target.checked)
  }

  const editTask = () => {
    setEditing((editing) => !editing)
  }

  const changeInputValue = (e) => {
    setEditingValue(e.target.value)
  }

  return (
    <li className={isDone ? 'completed' : null || editing ? 'editing' : null}>
      <div className="view">
        <input
          onChange={(e) => changeCheckBoxStatus(e)}
          checked={checkboxStatus || isDone}
          className="toggle"
          type="checkbox"
          onClick={onMarkDoneTask}
        />
        <label>
          <span className="title">{value}</span>
          <Timer id={id} onSaveTime={onSaveTime} min={min} sec={sec} />
          <span className="description">{formatDistanceToNow(parseISO(whenCreated))} ago</span>
        </label>
        <button onClick={editTask} className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleteTask}></button>
      </div>

      {editing === true ? (
        <EditTaskField
          editingValue={editingValue}
          onEdit={onEdit}
          id={id}
          editTask={editTask}
          changeInputValue={changeInputValue}
        />
      ) : null}
    </li>
  )
}
