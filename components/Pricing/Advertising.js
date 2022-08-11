import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Image,
  Container,
  Heading,
  Text,
  Button,
  Link,
  Center,
  VStack
} from '@chakra-ui/react';
import {FiSend} from 'react-icons/fi'


function StatsCard(props) {
  const { image, title, content, link, linktitle} = props;
  return (
    <Box
      px={{ base: 4, md: 8 }}
      py={5}
      bgColor={'gray.3'}
      shadow={'md'}
      justifyContent={'space-between'}
      rounded={'lg'}>
      <Image 
        mr={'auto'} 
        ml={'auto'} 
        rounded={'md'} 
        src={image}/>
      <Box>
        <Text 
          pt={3} 
          fontSize={{ base: '2xl', md: '3xl'}} 
          fontWeight={'bold'}
        >{title}</Text>
        <Text 
          py={4} 
          fontSize={{base: 'sm', lg:'lg'}} 
        >{content}</Text>
      </Box>
      <Link
          mb={5}
          href={link}
          color={'green.1'}
          fontSize={{base: 'sm', lg:'lg'}} 
        >{linktitle}
      </Link>
    </Box>
  );
}

const Advertising = ({bgGradient}) => {
  return (
    <>
      <Box bgGradient={bgGradient}>
        <Container 
          pt={20} 
          maxW="1300px" 
          centerContent 
          overflow="hidden"
         >
          <Box
            mx={{ sm: 4, md: 16, lg: 10 }}
            mb={6}
            rounded={'lg'}
            >
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
              <StatsCard 
                image={'/images/advertising/advertising1.png'} 
                title={'Guide to create a crypto wallet'} 
                content={"Storagon applies blockchain technology and a Web3-compatible platform. So, you will access Storagon by a crypto wallet. This helps to protect your identity, and ensure security and privacy. If you don't have a crypto wallet, this guide will help you to create one."}
                link={'#'}
                linktitle={'Learn more'}
                />
              <StatsCard 
                image={'/images/advertising/advertising2.png'} 
                title={'Connect your wallet to Storagon'} 
                content={'If you already have a crypto wallet, it is very simple to connect your wallet to Storagon. This guide will help you to connect your wallet, and load up with STG token to be ready to enjoy Storagon services.'}
                link={'#'}
                linktitle={'Learn more'}
              />
              <StatsCard 
                image={'/images/advertising/advertising3.png'} 
                title={'Register a right plan for you'} 
                content={'Each plan has its own purpose, benefits and price. This guide will help you to understand each plan and suggest you to choose the best option for your demand. Switching between plans are super easy and you can do it at anytime after registering.'}
                link={'#'}
                linktitle={'Learn more'}
              />
            </SimpleGrid>
          </Box>
          <Box 
            bgColor={'gray.3'}
            mx={{ sm: 4, md: 16, lg: 10 }}
            mb={6}
            shadow={'md'}
            rounded={'lg'}
            >
            <SimpleGrid 
              columns={{ base: 1, md: 2 }}
              px={5}
              py={5}
              alignItems={'center'}
              >
              <VStack>
                <Box>
                  <Text 
                    fontSize={{ base: '2xl', md: '3xl'}}
                    fontWeight={'600'}
                  >
                    STORAGON ECOSYSTEM:
                  </Text>
                  
                  <Text fontSize={{base: 'sm', lg:'lg'}} >
                    - The most private space 
                  </Text>
                  <Text fontSize={{base: 'sm', lg:'lg'}} >
                    - Outstanding utilities
                  </Text>
                  <Text fontSize={{base: 'sm', lg:'lg'}} >
                    - Superior monetising mechanism
                  </Text>
                  <Text fontSize={{base: 'sm', lg:'lg'}} >
                    - Web3 decentralized blockchains
                  </Text>
                </Box>
                <Button 
                  as={'a'} 
                  size='md'
                  fontSize={'sm'}
                  colorScheme='blue' variant='outline'
                  href={'https://app.storagon.io/login'}>
                  Start for Free
                </Button>
                
              </VStack>
              <Image src='/images/advertising/advertising4.png'/>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

   
     
    </>
  )
}


export default Advertising