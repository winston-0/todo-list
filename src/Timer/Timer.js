import React from 'react'

export default class Timer extends React.Component {
  state = {
    isRunning: false,
    seconds: this.props.sec,
    minutes: this.props.min,
  }
  changeSeconds = (type) => {
    let splitNumber = type.split('')
    let firstNumber = Number(splitNumber[0])
    let secondNumber = Number(splitNumber[1])
    if (secondNumber > 0) {
      splitNumber[1] = secondNumber - 1
      return splitNumber.join('')
    } else {
      splitNumber[1] = 9
      splitNumber[0] = firstNumber - 1
      return splitNumber.join('')
    }
  }

  diffTime = () => {
    const { seconds, minutes } = this.state
    if (minutes === '00' && seconds === '01') {
      this.setState({
        seconds: '00',
      })
      clearInterval(this._idForTimer)
      return
    }
    if (seconds !== '00') {
      this.setState({
        seconds: this.changeSeconds(seconds),
      })
    } else {
      this.setState({
        seconds: '59',
        minutes: minutes !== '01' ? this.changeSeconds(minutes) : '00',
      })
    }
  }
  _idForTimer = null
  //   componentDidMount() {
  //     setInterval(this.diffTime, 1000)
  //   }
  startTimer = () => {
    if (this.state.isRunning !== true) {
      this.setState({
        isRunning: true,
      })
      this._idForTimer = setInterval(this.diffTime, 1000)
    }
  }
  pauseTimer = () => {
    this.setState({
      isRunning: false,
    })
    clearInterval(this._idForTimer)
  }

  render() {
    const { seconds, minutes } = this.state
    return (
      <span className="description">
        <button onClick={this.startTimer} className="icon icon-play"></button>
        <button onClick={this.pauseTimer} className="icon icon-pause"></button>
        <span className="timerCount">
          {minutes}:{seconds}
        </span>
      </span>
    )
  }
}
