import { React, Component } from 'react'

export class NewTaskForm extends Component {
  state = {
    value: '',
    min: '',
    sec: '',
  }
  changeValue = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  changeSeconds = (e) => {
    const seconds = e.target.value
    this.setState({
      sec: seconds,
    })
  }
  changeMinutes = (e) => {
    const minutes = e.target.value
    this.setState({
      min: minutes,
    })
  }
  render() {
    const { value } = this.state
    const { onAddTask } = this.props
    return (
      <form
        className="new-todo-form"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onAddTask(this.state)
            this.setState({
              value: '',
              min: '',
              sec: '',
            })
          }
        }}
      >
        <input
          value={value}
          onChange={this.changeValue}
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        ></input>
        <input
          onChange={this.changeMinutes}
          value={this.state.min}
          className="new-todo-form__timer"
          placeholder="min"
        />
        <input
          value={this.state.sec}
          onChange={this.changeSeconds}
          className="new-todo-form__timer"
          placeholder="sec"
        />
      </form>
    )
  }
}
