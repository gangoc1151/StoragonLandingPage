import { 
  Box,
  Text,
  SimpleGrid,
  Stack,
  Button,
  Flex,
  Heading,
  Image,
  Container,
  VStack } from "@chakra-ui/react"
import HowItWorks from "../components/storagon-intro/HowItWorks"
import EncryptionSteps from "../components/storagon-intro/EncryptionSteps"
import Advertising from "../components/Pricing/Advertising"

const DecentralizedCloud = () => {
  return (
    <>
      <Box
        bgImage="url('/images/banner/storagon-banner.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgGradient='linear(to-b, #CE8EFF, #65CDFF)'
        bgSize='cover'
        mt={'60px'}
      > 
        <Container
          maxW={'5xl'} 
          pt={12}>
          <SimpleGrid 
            columns={{ base: 1, md: 2 }}>
              <VStack 
                spacing={4} 
                alignSelf='center'>
                <Box>
                  <Heading fontSize={{ base: '2xl', md: '3xl'}}>Storagon D-Cloud</Heading>
                  <Box>
                    <Text color={'text.1'} fontSize={{base: 'sm', lg:'lg'}}>
                      Store local files or synchronize from other clouds to Storagon
                      decentralized blockchain network.<br/>
                      Fast. Simple. Secure. Private.</Text>
                  </Box>
                </Box>
               
              </VStack>
              <Flex justifyContent='center'>
                <Image
                  objectFit={'contain'}
                  src='/images/storagon/security.png'
                  boxSize={{base: 'sm', lg: 'xl'}}
                />
              </Flex>
            </SimpleGrid>
        </Container>
      </Box>
      <HowItWorks/>
      <EncryptionSteps />
      <Advertising 
        bgGradient={[
          'linear(to-b, #C5F2FF, #F8F8F8)'
        ]}/>
    </>
  )
}

export default DecentralizedCloud