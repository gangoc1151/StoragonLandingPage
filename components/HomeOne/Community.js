import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Image, Text } from "@chakra-ui/react"
import Head from 'next/head';
import {
  Heading,
  Container,
  Button,
  Stack,
  Link,
  Icon,
  useColorModeValue,
  createIcon
} from '@chakra-ui/react';
// import bgImage from '/images/banner/storagon-banner.svg'

const Community = () => {
 
  return (
    <>
      <Box
        bgGradient={[
        'linear(to-b, blue.4, blue.5, purple.2)'
        ]}
        mb={10}
      > 
        <Box 
          textAlign={'center'}   
          w={'full'}
          lineHeight={10}
          // position={'absolute'}
        >
          <Heading 
            pt={{base:2, md: 7}}
            fontSize={{ base: '2xl', md: '3xl', lg:'3xl' }}
            px={5}
          >

            Non-Fungible Token (NFT) Files Market
          </Heading>
          <Box
            mt={2}
          >
            <Text 
              fontSize={{base: 'sm', lg:'lg'}}
              py={2}
              px={5}
              >Generate NFTs from your files with only a couple of clicks.<br/> Unlimited. Offers and Auction available. No cost from Storagon.
            </Text>
          </Box>
          <Button 
            mt={2}
            as={'a'} 
            fontSize={{base: 'sm', lg:'lg'}}
            colorScheme='blue' variant='outline'
            href={'#'}>
            Learn more
          </Button>
          <Image 
            src='/images/portfolio/storagon-com.svg'
            boxSize={{base: '250px', md:'sm', lg: 'xl'}}
            px={5}
            style={{ transform: 'translate(-50%)' }}
            left="50%"
            position={'absolute'}
          />
        </Box>
      
        <Image 
          src='/images/portfolio/cloud2.png'
          backgroundPosition="center"
          backgroundSize={'cover'}
          bgRepeat={'no-repeat'}
          w={'full'}
        />
         <Image 
          src='/images/portfolio/cloud.png'
          backgroundPosition="center"
          backgroundSize={'cover'}
          bgRepeat={'no-repeat'}
          w={'full'}
        />
      </Box>
    </>
  );
};

export default Community;