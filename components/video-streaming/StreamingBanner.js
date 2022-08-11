import { 
  Box, 
  Container, 
  SimpleGrid, 
  VStack, 
  Heading, 
  Text, 
  Flex, 
  Image 
} from "@chakra-ui/react"


const StreamingBanner = () => {
  return (
    <>
      <Box
        bgGradient='linear(to-b, #CE8EFF, #65CDFF)'
        mt={'60px'}
      > 
        <Container
          maxW={'5xl'} 
          pt={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box 
              spacing={4} 
              alignSelf='center'>
              <Heading 
                fontSize={{ base: '2xl', md: '3xl'}}>
                Storagon D-Streaming
              </Heading>
              <Box>
                <Text color={'text.1'} fontSize={{base: 'sm', lg:'lg'}} >
                Upload and encrypt your videos to the Storagon blockchain network with God speed, interruption-free, censorship-free.
                </Text>
              </Box>
            </Box>
            <Flex 
              justifyContent='center'
            >
              <Image
                objectFit={'contain'}
                src='/images/storagon/video-storage.png'
                boxSize={{base: 'sm', lg: 'xl'}}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default StreamingBanner