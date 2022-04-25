import { Grid } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
       <Grid
      maxW={'1234px'}
      gap={5}
      m="0px auto"
      px="5px"
    >
       <Header/>
      {children}
      <p>footer</p>
    </Grid>
  )
}

export default Layout