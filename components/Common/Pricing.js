import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon';

import { Image } from '@chakra-ui/image';
import { FaCheck } from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5'
function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      flex='1'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
>
      {children}
    </Box>
  );
}

export default function Pricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Pricing
        </Heading>
        <Text fontSize="lg" color={'black'}>
           How does STORAGON compare?
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <Box
          alignSelf={{ base: 'center', lg: 'flex-start' }}
          w={{base:'2xs', sm: 'xs', lg:'2xs'}}>
          <PriceWrapper>
            <Box 
              mt={4}
              shadow="base"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'gray.500')}
              borderRadius={'xl'}>
              <Box py={4} px={12}>
                <Image src='/images/Pricing/Dropbox_Icon.svg' 
                  ml='auto'
                  mr='auto'
                />
                <Text fontWeight="400" fontSize="xl">
                  Dropbox
                </Text>
                <VStack justifyContent="center">
                  <Text fontSize="2xl" fontWeight="500">
                    4.9 $
                  </Text>
                  <Text fontSize="xl" color="gray.500">
                    per TB a month
                  </Text>
                </VStack>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <Box  alignItems='center' display='flex' spacing={3}>
                  <Icon as={IoCloseSharp} color="red.500" boxSize={5}/>
                  <Text ml={2}>End-to-end encryption</Text>
                </Box>
              </VStack>
             
              <Box 
                justifyContent='center'
                alignItems='center'
              >
                <Box w="90%" ml='auto' mr='auto' py={2}>
                    <Text>Price based on Professional individual annual payment</Text>
                </Box>
              </Box>
              
            </Box>
          </PriceWrapper>
        </Box>
        <Box
          alignSelf={{ base: 'center', lg: 'flex-start' }}
          w={{base: '2xs', sm: 'xs'}} >
          <PriceWrapper>
            <Box 
              borderWidth='1px' 
              borderColor='green.1'
              shadow="base"
              borderWidth="1px"
              borderRadius={'xl'}
            >
              <Box position="relative">    
                <Box py={4} px={12}>
                  <Image src='/images/Pricing/storagon_icon.svg' 
                    ml='auto'
                    mr='auto'
                  />
                  <Text fontWeight="500" fontSize="2xl">
                    Storagon
                  </Text>
                  <VStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                      4.9 $
                    </Text>
                    <Text fontSize="3xl" color="gray.500">
                      per TB a month
                    </Text>
                  </VStack>
                </Box>
                <HStack
                  bg={useColorModeValue('gray.50', 'gray.700')}
                  py={4}
                  direction={'row'}
                  justifyContent='center'  
                  borderBottomRadius={'xl'}>
                  <Box  alignItems='center' display='flex' spacing={3}>
                    <Icon as={FaCheck} color="green.500" boxSize={5}/>
                    <Text ml={2}>End-to-end encryption</Text>
                  </Box>
                </HStack>
                <Box w="90%" ml='auto' mr='auto' py={2}>
                  <Text> *Price based on Pro III annual payment. </Text>
                </Box>
              </Box>
            </Box>
           
          </PriceWrapper>
        </Box>
        <Box
          alignSelf={{ base: 'center', lg: 'flex-start' }}
          w={{base:'2xs', sm: 'xs', lg:'2xs'}}>
          <PriceWrapper>
            <Box 
              mt={4}
              shadow="base"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'gray.500')}
              borderRadius={'xl'}>
              <Box py={4} px={12}>
                <Image   src='/images/Pricing/Google-Drive-icon.svg' 
                  ml='auto'
                  mr='auto'
                />
                <Text fontWeight="400" fontSize="xl">
                Google drive
                </Text>
                <VStack justifyContent="center">
                  <Text fontSize="2xl" fontWeight="500">
                    4.9 $
                  </Text>
                  <Text fontSize="xl" color="gray.500">
                    per TB a month
                  </Text>
                </VStack>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <Box  alignItems='center' display='flex' spacing={3}>
                  <Icon as={IoCloseSharp} color="red.500" boxSize={5}/>
                  <Text ml={2}>End-to-end encryption</Text>
                </Box>
              </VStack>
             
              <Box 
                justifyContent='center'
                alignItems='center'
              >
                <Box w="90%" ml='auto' mr='auto' py={2}>
                    <Text>*Price based on 30 TB annual payment. </Text>
                </Box>
              </Box>
              
            </Box>
          </PriceWrapper>
        </Box>
        
      </Stack>
    </Box>
  );
}

