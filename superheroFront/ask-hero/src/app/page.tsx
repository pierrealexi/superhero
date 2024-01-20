'use client'
import { Button, ChakraProvider, Text, Box, Flex, Heading, Input, Stack, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'
import NextLink from 'next/link';

export default function Home() {
  
    const [hide, sethide] = useState(false)
    const handleClick = () => sethide(!hide)
  return (
    <ChakraProvider>
      <Flex
      align="center"
      justify="center"
      h="100vh"
      bg="white" 
    >

      <Box position="absolute" top="4" left="4">
          <Text fontSize='50px' as='b' color='#3454D1'>
            Ask-Hero
          </Text>
        </Box>
      <Box p={28} borderWidth={1} borderRadius={10} boxShadow="lg" bg="#3454D1">
        <Heading as="h2" size="lg" mb={16}>
          Connexion
        </Heading>
        <Stack spacing={16}>
          <Stack spacing={6}>
            <Input placeholder='Enter Email' bg='#666666' pr='4.5rem' />
            <InputGroup size='md'>
            <Input
              bg='#666666'
              pr='4.5rem'
              type={hide ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {hide ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          </Stack>
          <Button as={NextLink} href="/Accueil" bg="#666666" >
          Connexion
        </Button>

        </Stack>
      </Box>
    </Flex>
      
    </ChakraProvider>
  )
}
 