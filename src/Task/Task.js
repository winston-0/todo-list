import { React, Component } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { parseISO } from 'date-fns'

import EditTaskField from '../EditTaskField/EditTaskField'
import Timer from '../Timer/Timer'

export default class Task extends Component {
  state = {
    checkboxStatus: false,
    editing: false,
    editingValue: this.props.value,
  }
  static defaultProps = {
    isDone: false,
    whenCreated: new Date().toISOString(),
  }
  changeCheckBoxStatus = (e) => {
    this.setState({
      checkboxStatus: e.target.checked,
    })
  }
  editTask = () => {
    this.setState((state) => {
      return {
        editing: !state.editing,
      }
    })
  }
  changeInputValue = (e) => {
    this.setState({
      editingValue: e.target.value,
    })
  }

  render() {
    const { value, isDone, onDeleteTask, onMarkDoneTask, onSaveTime, whenCreated, onEdit, id, min, sec } = this.props
    const { checkboxStatus, editing, editingValue } = this.state
    return (
      <li className={isDone ? 'completed' : null || editing ? 'editing' : null}>
        <div className="view">
          <input
            onChange={(e) => this.changeCheckBoxStatus(e)}
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
          <button onClick={this.editTask} className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleteTask}></button>
        </div>

        {editing === true ? (
          <EditTaskField
            editingValue={editingValue}
            onEdit={onEdit}
            id={id}
            editTask={this.editTask}
            changeInputValue={this.changeInputValue}
          />
        ) : null}
      </li>
    )
  }
}
