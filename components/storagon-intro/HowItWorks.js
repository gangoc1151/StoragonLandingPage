import { Box, Container, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"

const HowItWorks = () => {
  return (
    <>
      <Box 
        p={10}
        bgGradient={[
        'linear(to-b, #FFF6DC, #FFF9EF)'
        ]}>
        <Container 
         maxW={'4xl'} p={10}>
          <SimpleGrid alignItems={'center'}  columns={{ base: 1, md: 2 }} spacing={10}>
              <Box >
                <Image 
                  src='/images/storagon/security2.png'
                />
              </Box>
            <Box>
              <Text 
              fontSize={{ base: '2xl', md: '3xl'}}
                fontWeight={'600'}>
                 How it works
              </Text>
              <Text
                fontSize={{base: 'sm', lg:'lg'}} >
                  Storagon is proud to be one of the pioneers in applying Web3 to data 
                  services and developing a series of integrated utilities for users, based 
                  on blockchain technology.               
              </Text>
              <Text
              fontSize={{base: 'sm', lg:'lg'}}>
              Storagon ecosystem is a system of integrated utilities operating on 
              cryptoeconomics protocol, which combines blockchain, decentralized 
              networks of many peer-to-peer nodes, and crypto-economic design.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}


export default HowItWorks