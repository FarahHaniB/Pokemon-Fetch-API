import React from 'react'
import HomeHeader from './HomeHeader'
import HomeBody from './HomeBody'
import { Box, Divider } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Box p={3}>
      <HomeHeader/>
      <Divider marginTop={5}/>
      <HomeBody />
    </Box>
  )
}

export default HomePage
