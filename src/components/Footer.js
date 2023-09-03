import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../css/MyCss.css' // add more css in case you need more hehe!

export const Footer = () => {
    return (
        <footer >
            <Container>
                <Stack
                    position={'fixed'}
                    bottom={0}
                    left={0}
                    right={0}
                    width={"100%"}
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor='#1976d2'
                    sx={{ py: 1 }}>
                    <Typography
                        variant="body2"
                        color="textSecondary">
                        © {new Date().getFullYear()}
                        TexTest Inc. All rights reserved.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary">
                        Contact: IfiguredItOutByMyself@Skadoosh.com
                    </Typography>
                </Stack>
            </Container>
        </footer>
    )
}
