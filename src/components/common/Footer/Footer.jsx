import React from 'react'
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { useStyles } from './footer.style';

function Footer() {

    const classes = useStyles()
  return (
    <Box className={classes.root}>
        <Container className={classes.footer}>
            <p>
                All rights reserved
            </p>
        </Container>
    </Box>
  )
}

export default Footer