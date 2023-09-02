import React, { useEffect, useState } from 'react'
import { Typography, Box, colors } from '@mui/material'
import { red } from '@mui/material/colors'

export const Timer = (props) => {
    const startTimer = props.isStart
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    let interval = 0
    useEffect(() => {
        if (startTimer) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1)
                if (seconds === 59) {
                    setMinutes(prev => prev + 1)
                    setSeconds(0)
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    })

    // const resetButton = () => {
    //     setMinutes(0)
    //     setSeconds(0)
    // }
    const boldBorderStyle = {
        border: '5px solid',
        borderColor: 'highlight',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1976d2', // Background color

    };

    return (
        <div >
            <br></br>
            <Box
                style={boldBorderStyle}
                component="div"
                fontWeight={'bold'}
                color={'White'}
                fontSize={'30px'}
                sx={{
                    visibility: 'visible',
                    border: 1,
                    borderRadius: '40px',
                    display: 'inline-flex',
                    p: 1,
                }}>
                {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}
            </Box>
        </div >
    )
}
