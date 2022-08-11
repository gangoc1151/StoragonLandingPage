import React from 'react';
import { Box, Image, Container,SimpleGrid, Stack, StackDivider, useColorModeValue, Flex, Text, Heading, VStack, HStack } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon
} from '@chakra-ui/react'

import { AiFillApple, AiFillWindows, AiFillAndroid } from "react-icons/ai";

import { DiLinux } from "react-icons/di";



const Devices = () => {
  return (
    <>
      <Box
        py={5}
        bgGradient={[
        'linear(to-b, yellow.5, white)'
      ]}
      >
        <Heading 
          fontWeight={600}
          fontSize={{ base: '2xl', md: '3xl', lg:'4xl' }}
          color={'heading.1'}
          textAlign={'center'}>
          Undifferentiated Ecosystem on all Devices
        </Heading>
        <Container maxW={'5xl'}>
          <SimpleGrid
            alignItems={'center'}
            columns={{ base: 1, md: 2 }} 
            spacing={10} 
            gridGap={{base: '1', md: '2.5rem'}}>
            <Flex justifyContent='center'>
              <Image 
                src='/images/portfolio/devices.svg'
                objectFit={'contain'}
                boxSize={{base: 'sm', sm: 'md', md: 'lg'}}
              /> 
            </Flex>
            <Stack>
              <Text fontSize={{base: 'sm', lg:'lg'}}>Storagon Ecosystem is undifferentiated and works seamlessly on all devices and operating systems. The Storagon Ecosystem includes the owing applications:</Text>
              <Accordion allowToggle>
                <AccordionItem
                  _first={{
                    borderTop:'none'
                  }}
                 py={2}>
                  <h2>
                    <AccordionButton flexDirection={'row-reverse'}>
                      <Box flex='1' textAlign='left'>
                        Storagon D-Cloud           
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      textAlign={'start'}
                      >Storagon native D-app for decentralized storage service. Click on the icons to download. 
                    </Text>
                    <HStack
                      alignItems={'center'}
                    >
                      <Text color={'#00C0A6'}>Computers: </Text>
                      <Icon as={AiFillApple} boxSize={5} />
                      <Icon as={AiFillWindows} boxSize={5} />
                      <Icon as={DiLinux} boxSize={5} />
                    </HStack>
                    <HStack>
                      <Text color={'#00C0A6'}>Mobiles:</Text>
                      <Icon as={AiFillApple} boxSize={5} />
                      <Icon as={AiFillAndroid} boxSize={5} />
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem py={2}>
                  <h2>
                  <AccordionButton flexDirection={'row-reverse'}>
                      <Box flex='1' textAlign='left'>
                        Storagon D-chat
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      textAlign={'start'}
                      >Storagon native D-chat for decentralized storage service. Click on the icons to download. 
                    </Text>
                    <HStack
                      alignItems={'center'}
                    >
                      <Text color={'#00C0A6'}>Computers: </Text>
                      <Icon as={AiFillApple} boxSize={5} />
                      <Icon as={AiFillWindows} boxSize={5} />
                      <Icon as={DiLinux} boxSize={5} />
                    </HStack>
                    <HStack>
                      <Text color={'#00C0A6'}>Mobiles:</Text>
                      <Icon as={AiFillApple} boxSize={5} />
                      <Icon as={AiFillAndroid} boxSize={5} />
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem py={2}>
                  <h2>
                  <AccordionButton flexDirection={'row-reverse'}>
                      <Box flex='1' textAlign='left'>
                        Storagon D-Streaming
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      textAlign={'start'}
                      >Storagon native D-Streaming for decentralized storage service. Click on the icons to download. 
                    </Text>
                    <HStack
                      alignItems={'center'}
                    >
                      <Text color={'#00C0A6'}>Computers: </Text>
                      <Icon as={AiFillApple} boxSize={5} />
                      <Icon as={AiFillWindows} boxSize={5} />
                      <Icon as={DiLinux} boxSize={5} />
                    </HStack>
                    <HStack>
                      <Text color={'#00C0A6'}>Mobiles:</Text>
                      <Icon as={AiFillApple} boxSize={5} />
                      <Icon as={AiFillAndroid} boxSize={5} />
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem 
                  _last={{
                    borderBottom:'none'
                  }} py={2}>
                  <h2>
                  <AccordionButton flexDirection={'row-reverse'}>
                      <Box flex='1' textAlign='left'>
                      NFT Files Market
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      textAlign={'start'}
                      >Storagon native NFT File Market for decentralized storage service. Click on the icons to download. 
                    </Text>
                    <HStack
                      alignItems={'center'}
                    >
                      <Text color={'#00C0A6'}>Computers: </Text>
                      <Icon as={AiFillApple} boxSize={5} />
                      <Icon as={AiFillWindows} boxSize={5} />
                      <Icon as={DiLinux} boxSize={5} />
                    </HStack>
                    <HStack>
                      <Text color={'#00C0A6'}>Mobiles:</Text>
                      <Icon as={AiFillApple} boxSize={5} />
                      <Icon as={AiFillAndroid} boxSize={5} />
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
             
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Devices;
