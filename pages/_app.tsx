import React from 'react'
import Form from './index'
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4} >
        <Form />
      </Box>
    </ChakraProvider>
  )
}

export default App