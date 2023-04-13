import React, { useEffect, useState, useRef } from 'react'

export default function Timer(props) {
  const { sec, min, id, onSaveTime } = props

  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(sec)
  const [minutes, setMinutes] = useState(min)

  const changeTime = (type) => {
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

  useEffect(() => {
    onSaveTime(id, minutes, seconds)
  }, [seconds, minutes])

  let timerId = useRef(null)

  useEffect(() => {
    if (isRunning) {
      timerId.current = setInterval(diffTime, 1000)
    }
    return () => clearInterval(timerId.current)
  }, [isRunning, seconds, minutes])

  useEffect(() => {
    return () => clearInterval(timerId.current)
  }, [])

  const diffTime = () => {
    if (minutes === '00' && seconds === '01') {
      setSeconds('00')
      clearInterval(timerId.current)
      return
    }
    if (seconds !== '00') {
      setSeconds(changeTime(seconds))
    } else {
      setSeconds('59')
      setMinutes(minutes !== '01' ? changeTime(minutes) : '00')
    }
  }

  return (
    <span className="description">
      <button onClick={() => setIsRunning(true)} className="icon icon-play"></button>
      <button onClick={() => setIsRunning(false)} className="icon icon-pause"></button>
      <span className="timerCount">
        {minutes}:{seconds}
      </span>
    </span>
  )
}
