import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Link } from '@chakra-ui/react'
import { motion, AnimatePresence, Variants } from "framer-motion"

import { Box, Image, Container,SimpleGrid, Stack, StackDivider, useColorModeValue, Flex, Text, Heading, Button, SlideFade } from '@chakra-ui/react';


const Portfolio = ({ bgColor, contentColor = '', shape }) => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);
  const [showShape, setshowShape] = useState(shape);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
    <Box
    >
      <Box
        bgGradient={[
        'linear(to-b, #FEF3E3, white)'
        ]}
        pt={5}
        >
          <Container 
            maxW={'5xl'} 
          >
            <SimpleGrid 
              columns={{ base: 1, md: 2 }} 
              spacing={10}
              gridGap={{base: '1', md: '2rem'}}>
              <Stack 
                spacing={4} 
                alignItems='center' 
                alignSelf='center'>
                <Heading 
                  fontSize={{ base: '2xl', md: '3xl'}}
                  textAlign='center'
                >
                  Decentralized storage service
                </Heading>
                <Box>
                  <Text 
                    color={'text.1'} 
                    fontSize={{base: 'sm', lg:'lg'}} 
                    textAlign='center'>
                    Store local files or synchronize from other clouds to Storagon
                    decentralized blockchain network. Fast. Simple. Secure. Private.
                  </Text>
                </Box>
              
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue('gray.100', 'gray.700')}
                    />
                  }>
                  <Button 
                    as={'a'} 
                    size='md'
                    fontSize={{base: 'sm', lg:'lg'}}
                    colorScheme='blue' variant='outline'
                    href={'/decentralized-cloud'}>
                  Learn more</Button>
                </Stack>
              </Stack>
              <Flex justifyContent='center'>
                <Image 
                  src='/images/portfolio/storagon-object.svg'
                  objectFit={'contain'}
                  boxSize={{base: 'sm', sm: 'md', md: 'lg'}}
                /> 
              </Flex>
            </SimpleGrid>
          </Container>
        </Box>
      <Box 
        bg='white'
        transformOrigin='left bottom'
        position='relative'
        >
        <Container maxW={'5xl'}
          transformOrigin='left bottom'>
          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            gridGap={{base: '1', md: '2rem'}}
            gridAutoFlow={'revert'}>
          
            <Flex justifyContent='center' display={{base: 'none', md: 'unset'}}>
              <Image
                 objectFit={'contain'}
                src='/images/portfolio/de-chat.png'
                boxSize={{base: 'sm', lg: 'md'}}
              />
            </Flex>
            <Stack spacing={4} alignItems='center' alignSelf='center'>
              <Heading 
                fontSize={{ base: '2xl', md: '3xl', lg:'3xl' }}
                textAlign='center'>Decentralized Chat Service</Heading>
              <Box>
                <Text color={'text.1'} fontSize={{base: 'sm', lg:'lg'}} textAlign='center'>
                  Your messages are routed randomly and continuously and protected
                  by multiple times encrypting. You are completely anonymous.
                </Text>
              </Box>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }>
                <Button 
                  as={'a'} 
                  size='md'
                  fontSize={{base: 'sm', lg:'lg'}}
                  colorScheme='blue' variant='outline'
                  href={'https://docs.storagon.io/storagon/how-storagon-works/storagon-d-chat?q=ido'}>
                  Learn more
                </Button>
              </Stack>
            </Stack>
            <Flex justifyContent='center' display={{base: 'unset', md: 'none'}}>
              <Image
                 objectFit={'contain'}
                 mr={'auto'}
                 ml={'auto'}
                src='/images/portfolio/de-chat.png'
                boxSize={{base: 'sm', lg: 'md'}}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      <Box
         bgGradient={[
        'linear(to-b, white, blue.4)'
        ]}>
        <Container maxW={'5xl'}>
          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            gridGap={{base: '1', md: '2rem'}}>
            <Stack spacing={4} alignItems='center' alignSelf='center'>
              <Heading 
                fontSize={{ base: '2xl', md: '3xl', lg:'3xl' }}
                textAlign='center'
              >Decentralized Streaming Service</Heading>
              <Text color={'text.1'} fontSize={{base: 'sm', lg:'lg'}} textAlign='center'>
                Upload and encrypt your videos to the Storagon blockchain network 
                with God speed, interruption-free, censorship-free. 
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }>
                <Button 
                  as={'a'} 
                  size='md'
                  fontSize={{base: 'sm', lg:'lg'}}
                  colorScheme='blue' variant='outline'
                  href={'/video-streaming'}>
                  Learn more
                </Button>
              </Stack>
            </Stack>
            <Flex justifyContent='center'>
              <Image
                 objectFit={'contain'}
                src='/images/portfolio/de-streaming.png'
                boxSize={{base: 'sm', lg: 'xl'}}
              />              
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
   
    </>
  );
};

export default Portfolio;
