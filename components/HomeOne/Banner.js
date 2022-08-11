import { Box, Image, Text } from "@chakra-ui/react"
import {
  Heading,
  Button,
  Stack
} from '@chakra-ui/react';
import { motion, AnimatePresence } from "framer-motion"


const Banner = () => {
 
  return (
    <>
    <Box
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize='cover'
      mt={'60px'}
    
      bgGradient={[
        'linear(to-tr, blue.3, purple.1, yellow.1,)'
      ]}
    > 
        <Stack
          as={Box}
          textAlign={'center'}
          justifyContent={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 26 }}>
          <Box>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', md: '3xl', lg:'4xl' }}
              color={'white'}
              >
              Comprehensive Solutions <br/> powered by Web3 technologies
            </Heading>
            <Text 
              my={5}
              color={'white'}
              fontSize={{base: 'sm', lg:'lg'}}
              px={5}
              maxW={'4xl'}
              ml={'auto'}
              mr={'auto'}
              >Join STORAGON ECOSYSTEM for the most private space, outstanding utilities and superior monetize mechanism on Web3 decentralized blockchains. </Text>
            <Button 
              as={'a'} 
              size='md'
              position={'unset'}
              color={'white'}
              bg={'blue.1'}
              fontSize={'sm'}
              _hover={{
                color: 'white.1',
                bgColor: 'Green.300'
              }}
              href={'https://app.storagon.io/login'}>
               Start for free
            </Button>
            <motion.div
          
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.15 }}
          >
 <Image 
              src='/images/banner/storage-banner-img.svg'
              alt='banner image'
              objectFit='contain'
              boxSize={{base: 'sm', md:'xl'}}
              ml='auto'
              mr='auto'
            />
  </motion.div>
           
          </Box>
        </Stack>
      </Box>
 
    </>
  );
};

export default Banner;
