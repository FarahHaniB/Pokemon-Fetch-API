import React from 'react'
import HomeHeader from './HomeHeader'
import HomeBody from './HomeBody'
import { Box, Divider } from '@chakra-ui/react'
import HomeFooter from './HomeFooter'

const HomePage = () => {
  return (
    <Box height='100vh' >
      <HomeHeader/>
      <HomeBody />
      <HomeFooter/>
    </Box>
  )
}

export default HomePage
