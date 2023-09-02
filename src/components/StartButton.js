import React, { useEffect, useState } from 'react'
import { Stack, Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export const StartButton = (props) => {
    const toggleButton = props.toggle
    const isButton = props.isStartBtn

    const [btnAttributes, setBtnAttributes] = useState({ btnColor: 'primary', btnText: 'Start', btnType: <PlayArrowIcon /> })

    useEffect(() => {
        setBtnAttributes({
            btnColor: isButton ? 'error' : 'primary',
            btnText: isButton ? 'Stop' : 'Start',
            btnType: isButton ? <PauseIcon /> : <PlayArrowIcon />
        })
    }, [props.isStartBtn])
    return (
        //<Stack spacing={2} direction={'row'} alignContent={'center'}>
        <Button
            variant='contained'
            spacing={2}
            endIcon={btnAttributes.btnType}
            size='small'
            color={btnAttributes.btnColor}
            onClick={toggleButton}
            sx={{
                borderRadius: '30px',
                fontSize: '25px',
                border: `5px solid`,
                borderColor: 'Highlight'
            }}
        >
            {btnAttributes.btnText}
        </Button>
        // </Stack>
    )
}

// variant='contained', variant='outlined', variant='text'