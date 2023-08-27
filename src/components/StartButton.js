import React from 'react'

export const StartButton = (props) => {
    const toggleButton = props.toggle
    const isButton = props.isStartBtn
    return (
        <>
            <button onClick={toggleButton}>{isButton ? 'Stop' : 'Start'}</button>
        </>
    )
}
