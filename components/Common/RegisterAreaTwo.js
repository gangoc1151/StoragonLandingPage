import Link from 'next/link';
import { Flex, SimpleGrid } from '@chakra-ui/layout';
import {Button, Box, Image} from '@chakra-ui/react'
const RegisterAreaTwo = ({ title }) => {
  return (
    <>
      <Box 
        // h={'500px'}
        bgColor={'gray.2'}
        pt={'10px'}
      >
        <div className='container'>
          <Box className='account-register-content' 
          py={4}>
            <h2>{title}</h2>
            {/* <p>
              Millions of people trust MEGA to store billions of files using our state of the art infrastructure. Join them and protect your data using one of the Internet’s most secure
              cloud and communication providers.
            </p> */}
            <Box
              alignItems={'center'}
              columns={{ base: 1, md: 2 }} spacing={8} gridGap={{base: '1', md: '2.5rem'}}> 
      
              {/* <Button 
                variant='outline' 
                spacing='6'
                bgColor={'whiteAlpha.200'}
                
              >
                Login
              </Button> */}
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
                href={'https://www.youtube.com/watch?v=fL8cFqhTHwA&t=68s'}>
               Start for free
              </Button>
           </Box>
           <Flex
            mt={10}
           >
            <Image ml='auto' mr='auto' src={'/images/portfolio/register1.svg'} alt='image' />
            <Image ml='auto' mr='auto' src={'/images/portfolio/register2.svg'} alt='image' />
           </Flex>
          

          
          </Box>
        </div>
        {/* <div className='shape6'>
          <img src='/images/shape/shape6.png' alt='image' />
        </div>
        <div className='shape7'>
          <img src='/images/shape/shape7.png' alt='image' />
        </div>
        <div className='shape8'>
          <img src='/images/shape/shape8.png' alt='image' />
        </div>
        <div className='shape9'>
          <img src='/images/shape/shape9.png' alt='image' />
        </div>
        <div className='shape10'>
          <img src='/images/shape/shape10.png' alt='image' />
        </div> */}
      </Box>
    </>
  );
};

export default RegisterAreaTwo;
