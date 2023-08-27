import React from 'react'

export const StartButton = (props) => {
    const toggleButton = props.toggle
    const isButton = props.startbtn
    return (
        <>
            <button onClick={toggleButton}>{isButton ? 'Stop' : 'Start'}</button>
        </>
    )
}
