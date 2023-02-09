import { React, Component } from 'react'

export class NewTaskForm extends Component {
  state = {
    value: '',
  }
  changeValue = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    const { value } = this.state
    const { onAddTask } = this.props
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onAddTask(value)
          this.setState({
            value: '',
          })
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
      </form>
    )
  }
}
