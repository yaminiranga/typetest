import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    let interval = 0
    const [button, setButton] = useState(false)
    useEffect(() => {
        if (button) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1)
                if (seconds === 59) {
                    setMinutes(prev => prev + 1)
                    setSeconds(0)
                }
            }, 100)
        }
        return () => clearInterval(interval)
    })

    const toggleButton = () => {
        setButton(prev => !prev)
    }
    const resetButton = () => {
        setMinutes(0)
        setSeconds(0)
    }

    return (
        <div>Timer
            <br></br>
            <span className='timer timer--minutes'>{minutes < 10 ? '0' + minutes : minutes}</span>
            <span className='timer'>:</span>
            <span className='timer timer--seconds'>{seconds < 10 ? '0' + seconds : seconds}</span>
            <button onClick={toggleButton}>{button ? 'Stop' : 'Start'}</button>
            <button onClick={resetButton}>Reset</button>

        </div >
    )
}
