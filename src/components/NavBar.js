import React, { useState } from 'react'
import {
    SwipeableDrawer,
    Hidden,
    Typography,
    IconButton,
    Stack,
    AppBar,
    Toolbar,
    Divider,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export const NavBar = () => {
    const emailId = "yaministartlight@gmail.com"
    const githubLink = "https://github.com/"
    const linkedinLink = "https://in.linkedin.com/"
    const [drawerOpen, setDrawerOpen] = useState(false)
    return (
        <AppBar position='static'
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                <IconButton
                    size='large'
                    color='inherit'
                    edge='start'
                    aria-label='logo'
                >
                    <Typography
                        variant='h6'
                        component={'div'}
                        fontSize={'30px'}
                        fontWeight={'bold'}
                    >
                        TexTest
                    </Typography>
                </IconButton>
                <Hidden smDown>
                    <Stack
                        spacing={2}
                        direction={'row'}
                    >
                        <IconButton
                            color='inherit'
                            href={linkedinLink}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            color='inherit'
                            href={`mailto:${emailId}`} >
                            <EmailIcon />
                        </IconButton>
                        <IconButton
                            color='inherit'
                            href={githubLink}>
                            <GitHubIcon />
                        </IconButton>
                    </Stack >
                </Hidden>

                <Hidden smUp >
                    {!drawerOpen &&
                        (<IconButton onClick={() => setDrawerOpen(true)} >
                            <MenuIcon />
                        </IconButton>
                        )}
                </Hidden>
            </Toolbar>
            <SwipeableDrawer
                open={drawerOpen}
                anchor='right'
                onOpen={() => { setDrawerOpen(true) }}
                onClose={() => { setDrawerOpen(false) }}>
                <div>
                    <IconButton onClick={() => setDrawerOpen(false)}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <Stack
                    spacing={2}
                    direction={'column'}
                >
                    <IconButton
                        color='inherit'
                        href={linkedinLink}>
                        <LinkedInIcon />
                    </IconButton>
                    <Divider />

                    <IconButton
                        color='inherit'
                        href={`mailto:${emailId}`} >
                        <EmailIcon />
                    </IconButton>
                    <Divider />

                    <IconButton
                        color='inherit'
                        href={githubLink}>
                        <GitHubIcon />
                    </IconButton>
                    <Divider />

                </Stack >
            </SwipeableDrawer>
        </AppBar >
    )
}

/*
                        
<IconButton sx={{ color: 'gray' }} component = 'a' href = "https://kbroman.org/github_tutorial/pages/init.html" >
    <GitHubIcon />
</IconButton >
            <Typography variant='h6' gutterBottom>Test your typing speed</Typography>
                    
*/