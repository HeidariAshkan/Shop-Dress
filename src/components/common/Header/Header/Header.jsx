import React from 'react'
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { useStyles } from './header.styles';

function Header() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Container className={classes.header}>
        <p>
          React Shopping Cart
        </p>
      </Container>
    </Box>
  )
}

export default Header