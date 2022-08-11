import { 
    Box, 
    Container, 
    SimpleGrid, 
    VStack, 
    Heading, 
    Text, 
    Flex, 
    Image,
    Link,
    Button,
    Stat
} from "@chakra-ui/react"

function StatsCard(props) {
  const { image, title, content, link, linktitle} = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={5}
      borderColor={'green.1'}
      borderWidth={2}
      borderStyle={'dashed'}
      rounded={'lg'}>
      <Text pt={3} fontSize={'xl'} fontWeight={'bold'}>{title}</Text>
      <Text py={4} fontSize={{base: 'sm', lg:'lg'}}>{content}</Text>
    </Stat>
  );
}
  
const SteamingInfo  = () => {
  return (
    <>
    <Box
      bgGradient={[
        'linear(to-b, #CFF8FF, #FFFDEB)'
        ]}
    >
        <Container  
          maxW="1300px" 
          centerContent 
          overflow="hidden"
        >
          <VStack
            p={5}
            maxW={'4xl'}
            spacing={5}
          >
            <Heading
              fontSize={{ base: '2xl', md: '3xl'}}
              pt={5}
            >
              Decentralization is the Future of Video Storage
            </Heading>
            <Text
              fontSize={{base: 'sm', lg:'lg'}}
              py={5}
              textAlign='center' >
              Peer-to-Peer (P2P) networks. Independent from centralized server farms for file storage, 
              P2P networks allow users to share files between them directly. Those network participants are called peers, 
              and the communication protocol, such as BitTorrent or Tixati, is in charge of breaking files into little bits.
            </Text>
            <Button 
              as={'a'} 
              size='md'
              fontSize={{base: 'sm', lg:'lg'}}
              colorScheme='blue' variant='outline'
              href={'https://docs.storagon.io/storagon/how-storagon-works/storagon-d-streaming'}
              >
              Read the overview
            </Button>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 3 }}
            pt={5}          
           spacing={{ base: 5, lg: 8 }}>
            <StatsCard 
              title={'Peer-to-peer (P2P) mechanism'} 
              content={'Storagon D-Streaming stores videos across multiple nodes, connected on a decentralized blockchain network regardless of the location. This is to make the video loading speed much faster and there will be no risk of interruption or lost files.'}
              />
            <StatsCard
              title={'Security & Privacy'} 
              content={'All videos are encrypted by default to prevent nodes to view or alter videos without uploader permission. Other users, if permitted, can watch the video by accessing fragments from a decentralized blockchain network.'}
            />
            <StatsCard
              title={'Self governance'} 
              content={'Users have full rights and responsibility to govern and decide what content to be uploaded. Videos are directly published and delivered to audiences without any intermediary intervention or central server.'}
            />
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default SteamingInfo