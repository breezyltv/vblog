import { Link } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layout'

const signup = () => {
  return (
     <Layout>
         <div>
            Signup page
            <Link href='/'>Home</Link>
         </div>
     </Layout>
   
  )
}

export default signup