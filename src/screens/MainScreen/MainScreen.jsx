import React from 'react'
import MainHeader from '../../components/customs/MainHeader/MainHeader';
import { Container } from '@mui/system';
import MainFooter from './../../components/customs/MainFooter/MainFooter';

function MainScreen({ children }) {
  return (
    <>
      <Container>
        <MainHeader/>
        {children}
        <MainFooter/>
      </Container>
    </>
  )
}

export default MainScreen