import { Image, SimpleGrid, VStack} from "@chakra-ui/react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion"


const AppDownload = () => {
  return (
    <>  
    <Box 
      py={5}
      bgGradient={[
        'linear(to-b, #BEF0FF, #F8F8F8)'
      ]}
      >
      <Heading 
        fontWeight={600}
        color={'heading.1'}
        fontSize={{ base: '2xl', md: '3xl', lg:'4xl' }}
        textAlign='center'>
         Ultimate earning capability with Storagon
      </Heading>
      <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4}} 
          direction={{ base: 'column', lg: 'row' }}
          maxW={'1300px'}
          justify="center"
          ml={'auto'}
          mr={'auto'}
          spacing={{ base: 4 }}
          py={10}
          px={3}>
          { FEATURE.map((navItem) => (
              <FeatureCard 
                key={navItem.label}
                label={navItem.label}
                content={navItem.content}
                url={navItem.url}  
              />
            ))}
        </SimpleGrid>
    </Box>
      
    </>
  );
};
 const FeatureCard = ({url, label, content}) => {
  return (
    <motion.div whileHover={{ 
      scale: 1.1
      }} >

   
    <Center 
      py={6}
      cursor={'pointer'}
      >
      <Box
        maxW={'300px'}
        boxShadow={'2xl'}
        rounded={'md'}
        h={'550px'}
        overflow={'hidden'}
        bgColor={'white'}
        pb={5}
       >
          <Box
            h={'210px'}
            pos={'relative'}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='cover'
            bgImage={url}>
          </Box>
          <Stack
          justifyContent={'space-between'}
          >
            <Stack p={6}>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                {label}
              </Heading>
              <Text 
                color={'gray.500'}>
                {content}          
              </Text>
            </Stack>
            
            <VStack>
              <Link 
                href='https://docs.storagon.io/storagon/how-storagon-works/monetization-mechanisms/earning-money-channels' 
                isExternal
                color={'#0BBDAA'}
                >
                Learn more <ExternalLinkIcon mx='2px' />
              </Link>
            </VStack>
          </Stack>
        
          
       
      </Box>
     
    </Center>
    </motion.div>
  );
}


const FEATURE = [
  {
    url: 'images/portfolio/feature1.png',
    label: 'Airdrop campaigns',
    content: 'There are airdrop campaigns for special events to reward users and promote its reputation. The earliest airdrop is going to be carried out before IDO.'
  },
  {
    url: 'images/portfolio/feature2.png',
    label: 'Referral rewards',
    content: 'Three referral rewards are incentives given to users who help introduce Storagon to more users.'
  },
  {
    url: 'images/portfolio/feature3.png',
    label: 'Earning from sharing',
    content: 'Storagon encourages users to share their files for other people can free download. In return, Storagon will compensate the sharers based on the number of downloads.'
  },
  {
    url: 'images/portfolio/feature4.png',
    label: 'Selling on NFTs market',
    content: 'Storagon (NFT) Market allows users to start making money as soon as they have a valid account without any barriers. Users can join the market FOR FREE, at no cost from Storagon, forever'
  },
]
export default AppDownload;
