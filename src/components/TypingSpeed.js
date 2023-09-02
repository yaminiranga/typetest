import React from 'react'
import { Button, Stack, Typography } from '@mui/material'


export const TypingSpeed = (props) => {
    const totalWords = props.strokes ? props.strokes / 5 : 0
    const correcttWords = 1000;
    const timeMinute = props.timeMinute;

    const grossWPM = totalWords && timeMinute ? (totalWords / timeMinute) : 0
    const netWPM = correcttWords && timeMinute ? correcttWords / timeMinute : 0

    const accuracy = netWPM && grossWPM ? netWPM * 100. / grossWPM : 0

    const mySpanStyle = {
        fontSize: '20px',
        color: '#1976d2',
        fontWeight: 'bold',
        border: '2px solid highlight',
        borderRadius: '5px',
        paddingInline: 10
    }
    return (
        <div>
            {//timeMinute
            }
            <Stack
                direction={'row'}
                spacing={'20px'}
                padding={'20px'}
                flex={1}
                justifyContent={'center'}
            >
                <span style={mySpanStyle}>
                    <Typography sx={{ color: 'primary.main' }}>STROKES</Typography>
                    <span  >
                        {props.strokes}
                    </span>

                </span>

                <span style={mySpanStyle}>
                    <Typography sx={{ color: 'primary.main' }}>Net-WPM</Typography>
                    <span   >
                        {netWPM.toFixed(2)}
                    </span>
                </span>

                <span style={mySpanStyle}>
                    <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>Gross-WPM</Typography>
                    <span >
                        {grossWPM.toFixed(2)}
                    </span>
                </span>

                <span style={mySpanStyle} >
                    <Typography sx={{ color: 'primary.main' }}>ACCURACY</Typography>
                    <span  >
                        {accuracy.toFixed(2)}
                    </span>
                </span>

                <span style={mySpanStyle}>
                    <Typography sx={{ color: 'primary.main' }}>WORDS</Typography>
                    <span  >
                        {totalWords}
                    </span>
                </span>


            </Stack>

        </div>
    )
}
