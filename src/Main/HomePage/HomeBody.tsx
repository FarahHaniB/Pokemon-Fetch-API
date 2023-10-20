import React from 'react'
import FetchApi from '../FetchApi'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchDetailApi from '../../Specific/FetchDetailApi';
import { Box } from '@chakra-ui/react'

const HomeBody = () => {
  return (
    <Box padding='15px' bg='#e4f1fe'>
    <Router>
      <Routes>
        <Route path="/" element={<FetchApi />} />
        <Route path="/Details" element={<FetchDetailApi />} />
      </Routes>
    </Router>
    </Box>
  )
}

export default HomeBody
