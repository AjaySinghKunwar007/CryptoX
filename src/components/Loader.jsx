import { Box,  Spinner, VStack } from '@chakra-ui/react'

import React from 'react'

const Loader = () => {
  return (
   <VStack display={"flex"} justifyContent={"center"} h={"90vh"} >
    <Box transform={"Scale(3)"}>
      <Spinner size={"xl"}/>
    </Box>
   </VStack>
  )
}

export default Loader