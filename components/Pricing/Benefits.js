import {
  Box,
  chakra,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Icon,
  Image,
  Container,
  Flex,
  Stack,
  Heading,
  StackDivider,
  Link,
  color
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';


function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={5}
      my={3}
      border={'1px solid'}
      borderColor={'gray.1'}
      rounded={'lg'}
      bgGradient={[
        'linear(to-b, #FFFCFF, #F8FAFF)'
        ]}
      >
      <Box
        position={'absolute'}
        border={'1px solid'}
        top="-26px"
        left="50%"
        borderColor={'gray.500'}
        bg={'white'}
        rounded={'30px'}
        p={3}
        style={{ transform: 'translate(-50%)' }}
        >
        <Icon as={FaCheck} color="green.500" boxSize={7}/>

      </Box>
      <StatLabel
        py={4}
        fontSize={{ base: '2xl', md: '3xl'}} 
        fontWeight={'bold'} 
        isTruncated>
        {title}
      </StatLabel>
      <StatNumber  
        fontSize={{base: 'sm', lg:'lg'}} 
        fontWeight={'normal'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

const Benefits = () => {
  return (
    <>
      <Box maxW="7xl" mx={'auto'} pb={8} px={{ base: 4, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={{ base: '2xl', md: '3xl'}}
          py={10}
          fontWeight={'bold'}
          >
          Unprecedented experience with Storagon
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'80% Less'} stat={'Save 80% on your cloud storage costs compared to the big cloud providers.'} />
          <StatsCard title={'Multi-Region'} stat={'With multi-region functionality built-in, you’ll never pay extra for more availability.'} />
          <StatsCard title={'No Minimum'} stat={"Store as much, or as little data as you need. Never pay for storage you aren't using."} />
          <StatsCard title={'No Lock-in'} stat={'Move your data around freely without worrying about how much it will impact your bill.'} />
        </SimpleGrid>
        <Box
         
        >
          <Container maxW={'5xl'} pt={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} gridGap={{base: '1', md: '2.5rem'}}>
              <Flex justifyContent='center'>
                <Image 
                  src='/images/Pricing/Stg-pricing1.png'
                  objectFit={'contain'}
                  boxSize={{base: 'sm', sm: 'md', md: 'lg'}}
                /> 
              </Flex>
              <Stack spacing={4} alignSelf='center'>
                <Heading fontSize={{ base: '2xl', md: '3xl'}}>Earn Money!</Heading>
                <Box>
                  <Text color={'text.1'} fontSize={{base: 'sm', lg:'lg'}} >
                  Storagon is not only the most affordable service, Storagon provides incredible opportunities to earn money.
                  </Text>
                </Box>
              
                <Stack
                  spacing={4}
                  >
                  <Link  
                    href='#'
                    color={'white'}
                    bg={'green.1'}
                    p={4}
                    textAlign={'center'}
                    w={'250px'}
                    fontSize={{base: 'sm', lg:'lg'}} 
                    fontWeight={'bold'}
                    rounded={'3xl'}
                    _hover={{
                      textDecoration: 'none',
                      color: 'white',
                      bgColor: '#29D0BE'
                    }}
                    textDecor={'none'}
                  >Get a Free Cost Analysis</Link>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      
      </Box>
    </>
  )
}

export default Benefits