import { 
  Box, 
  Container, 
  SimpleGrid, 
  VStack, 
  Heading, 
  Text, 
  Flex, 
  Image,
  Button,
  Stat,
  Link,
  HStack,
  Stack
} from "@chakra-ui/react"

function StatsCard(props) {
  const { image, title, content, link, linktitle} = props;
  return (
    <Stat
    px={{ base: 4, md: 8 }}
    py={5}
    bgColor={'gray.3'}
    shadow={'md'}
    rounded={'lg'}>
    <Image rounded={'md'} src={image}/>
    <Text 
      pt={3} 
      fontSize={'2xl'} 
      fontWeight={'bold'}>{title}</Text>
    <Text 
      py={4}
      fontSize={{base: 'sm', lg:'lg'}} 
      >{content}</Text>
    <Button 
      as={'a'} 
      size='md'
      fontSize={{base: 'sm', lg:'lg'}} 
      colorScheme='blue' variant='outline'
      href={'#'}>
      Learn more
    </Button>
  </Stat>
  );
}

const StreamingBenefits = () => {
  return (
    <> 
     <Box
        bgGradient={[
        'linear(to-b, #FFFDEB, #CEF8FF)'
        ]}
      > 
        <Container
          maxW={'5xl'} 
          pt={5}
          pb={10}
          centerContent 
          overflow="hidden">
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <VStack 
              spacing={5} 
              alignSelf='center'>
              <Stack>
                <Heading 
                  fontSize={{ base: '2xl', md: '3xl'}}>
                  Playback is ready             
                </Heading>
                <Box>
                  <Text 
                    color={'text.1'} 
                    fontSize={{base: 'sm', lg:'lg'}}>
                    Storagon D-Streaming provides its own streaming playback to 
                    help owners and approved users access and play the streaming
                    video anytime without a need for a third-party media player. 
                    Less access from third parties, more security and privacy.
                  </Text>
                </Box>
              </Stack>
              <Button 
                as={'a'} 
                size='md'
                fontSize={{base: 'sm', lg:'lg'}} 
                colorScheme='blue' variant='outline'
                href={'https://docs.storagon.io/storagon/how-storagon-works/storagon-d-streaming'}>
                Get the Report
              </Button>
            </VStack>
            <Flex 
              justifyContent='center'
            >
              <Image
                objectFit={'contain'}
                src='/images/storagon/video-storage2.png'
                boxSize={{base: 'sm', lg: 'xl'}}
              />
            </Flex>
          </SimpleGrid>
          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            spacing={{ base: 5, lg: 8 }}
          >
            <StatsCard 
              title={'Mint NFT from your own videos'} 
              image={'/images/storagon/video-storage4.png'} 
              content={'Users can easily mint NFT from their videos without any limitation of file format or file size. Minting NFT costs users only a gas fee is charged by the network but no cost collected by Storagon Ecosystem.'}
              link={'#'}
              linktitle={'Watch the Video'}
              />
            <StatsCard
              title={'Multiple ways to earn money from streaming'} 
              image={'/images/storagon/video-storage3.png'} 
              content={'SStoragon D-Streaming provides various options to earn money for video creators. Earning from Storagon Ecosystembased on the number of views; earned from leasing Videos or selling NFT files on the NFT market; or gifted by viewers.'}
              link={'#'}
              linktitle={'Watch the Video'}
            />
          </SimpleGrid>
        </Container>
     
      </Box>
    </>
  )
}

export default StreamingBenefits