import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
const Footer = () => {
  return (
    <Box 
    bgColor={"blackAlpha.900"} 
    color={"whiteAlpha.700"}
    w={'full'}
    minH={"48"}
    px={"16"}
    py={["16","8"]}
    >
        <Stack
        direction={['column','row']}
        alignItems={"center"}
        h={"full"}
        >
            <VStack
            w={"full"}
            alignItems={['center','flex-start']}

            >
                <Text fontWeight={"bold"}>About Us</Text>
                <Text
                fontSize={"sm"}
                letterSpacing={"widest"}
                alignItems={['center','left']}
                >
                    We are the best Crypto Trading app in india, We provide our guidance at very Affordable price.
                    </Text>

            </VStack>
            <VStack>
                <Avatar 
                boxSize={"28"}
                marginTop={["4","0"]}
                />
                <Text>Our Founder</Text>
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer