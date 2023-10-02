import React from 'react'
import { Button, Stack, Typography } from '@mui/material'


export const TypingSpeed = (props) => {

    const wordLength = 5
    //  const totalWords = props.strokes ? props.strokes / wordLength : 0
    const correcttWords = props.correctStrokes / wordLength;
    const totalWords = props.words ? props.words / wordLength : 0;
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
        paddingInline: 10,
        marginBottom: '10px'
    }
    return (
        <div>
            <Stack
                direction={'row'}
                spacing={'20px'}
                padding={'20px'}
                flex={1}
                flexWrap={'wrap'}
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

                <span style={{
                    ...mySpanStyle,
                    border: '5px solid highlight',
                    outline: '2px solid',
                    outlineOffset: '2px'
                }} >
                    <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>Gross-WPM</Typography>
                    <span style={{ fontSize: '25px' }}>
                        {grossWPM.toFixed(2)}
                    </span>
                </span>

                <span style={mySpanStyle} >
                    <Typography sx={{ color: 'primary.main' }}>ACCURACY</Typography>
                    <span  >
                        {accuracy.toFixed(2)}%
                    </span>
                </span>

                <span style={mySpanStyle}>
                    <Typography sx={{ color: 'primary.main' }}>WORDS</Typography>
                    <span  >
                        {totalWords}
                    </span>
                </span>


            </Stack>

        </div >
    )
}
