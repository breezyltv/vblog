import { Link } from '@chakra-ui/react'
import React from 'react'
import SigninCPN from '../components/auth/SigninCPN'
import Layout from '../components/layout'

const signin = () => {
  return (
     <Layout>
        <SigninCPN/>
     </Layout>
  )
}

export default signin