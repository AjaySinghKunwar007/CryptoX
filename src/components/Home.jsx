import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react';
import btcSrc from "../assets/btc.png";

import{motion} from "framer-motion"
const Home = () => {
  return (
    <Box h={"85vh"} w={"full"} bgColor={"blackAlpha.900"}>
      <motion.div
      style={{
        height: "80vh"
      }}
      animate={
        {
          translateY : "20px"
        }
      }
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      >
      <Image 
      h={"full"} 
      w={"full"} 
      objectFit={"contain"} 
      src={btcSrc}
      filter={"grayScale(1)"}
      />
      </motion.div>
      
      <Text 
      fontSize={'6xl'} 
      fontWeight={"thin"} 
      color={"whiteAlpha.700"}
      marginTop={"-55px"}
      align={"center"}
      >Crypto X</Text>
    </Box>
  )
}

export default Home