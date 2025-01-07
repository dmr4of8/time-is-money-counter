import React from 'react'
import styles from './Timer.module.css'

export default function Timer({ hourlyWage }) {
  const [currentState, setCurrentState] = React.useState('')
  const [currentTime, setCurrentTime] = React.useState(0)
  const intervalRef = React.useRef()
  const millisecondWage = hourlyWage/3600000
  const onStart = () => {
    if (currentState === 'START') return
    setCurrentState('START')
    intervalRef.current = setInterval(() => {
      setCurrentTime((currentTime) => currentTime + 50)
    }, 50)
  }

  const onStop = () => {
    if (currentState === 'STOP') return
    setCurrentState('STOP')
    clearInterval(intervalRef.current)
  }

  const onReset = () => {
    if (currentState === 'RESET') return
    setCurrentTime(0)
  }

  
  const sec = Math.floor(currentTime / 1000)
  const min = Math.floor(sec / 60)
  const hour = Math.floor(min / 60)
  const millis = (currentTime % 1000).toString().padStart(3,"0")
  const seconds =  (sec % 60).toString().padStart(2,"0")
  const minutes =  (min % 60).toString().padStart(2,"0")
  const hours =  (hour % 24).toString().padStart(2,"0")

  const currentMilliseconds = currentTime


  return (
    <div className="Timer">
      <button className='button' onClick={onStart}>Start</button>
      <button className='button' onClick={onStop}>Stop</button>
      <button className='button' onClick={onReset}>Reset</button>
      <div className="timer">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>:
        <span>{millis}</span>
      </div>
      <div className='money'>
        <span>$ {Math.round(((millisecondWage*currentMilliseconds) + Number.EPSILON) * 1000) / 1000}</span>
      </div>
    </div>
  )
}
