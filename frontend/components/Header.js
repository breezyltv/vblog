import React from 'react'
import {   
  Grid,
  GridItem,
  HStack,
  Link as CLINK,
  Text,
 } from '@chakra-ui/react'
import Link from 'next/link';
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
  FaGithub,
} from 'react-icons/fa';
import {ColorModeSwitcher} from "./buttons/ColorModeSwitcher"
import { APP_NAME } from '../config'
const Header = () => {
  return (
   <Grid templateColumns='repeat(2, 1fr)' gap={6}>
      <GridItem w="100%" py="10px">
        <HStack
          justifyContent={'space-between'}
          h="100%"
          fontSize="md"
          fontWeight="500"
        >
           <Text>{APP_NAME}</Text>

          
        </HStack>
      </GridItem>
      <GridItem w="100%" position="relative">
        <HStack justifyContent={'flex-end'}>
                     <Link
              href="https://www.linkedin.com/in/vu-le-3278a1203/"
              isExternal
            >
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/breezyltv" isExternal>
              <FaGithub size={24} />
            </Link>
            <Link href="/#about-section">
              <FaInstagramSquare size={24} />
            </Link>
            <Link href="/#about-section">
              <FaFacebookSquare size={24} />
            </Link>
         <ColorModeSwitcher />
         <Link href="/signin">
           <CLINK>Signin</CLINK>
         </Link>
        </HStack>
      </GridItem>
    </Grid>
  )
}

export default Header