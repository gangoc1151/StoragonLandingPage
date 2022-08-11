import { Box, Stack, Heading, VStack, Image, Text, SimpleGrid } from "@chakra-ui/react"

const RoadMap = () => {
  return (
    <>
      <VStack
         bgGradient={[
        'linear(to-b, white, yellow.5,)'
      ]}
        py={5}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', md: '3xl', lg:'4xl' }}
          color={'heading.1'}
          textAlign={'center'}
          >
          Storagon Development Roadmap
        </Heading>
        <SimpleGrid 
          py={10}
          px={10}
          columns={{base: 1, md: 2, lg: 4}}
          spacing={10}>
          <RoadMapItem
            url={'/images/storagon/roadmap/Q1.png'}
            content={'Storagon D-Cloud'}
            roadmap={'Q1 2022'}
          />
          <RoadMapItem
            url={'/images/storagon/roadmap/Q2.png'}
            content={'Storagon D-Chat'}
            roadmap={'Q2 2022'}
          />
          <RoadMapItem
            url={'/images/storagon/roadmap/Q3.png'}
            content={'Storagon D-Streaming'}
            roadmap={'Q3 2022'}
          />
          <RoadMapItem
            url={'/images/storagon/roadmap/Q4.png'}
            content={'NFT Files Market'}
            roadmap={'Q4 2022'}
          />
        </SimpleGrid>
      </VStack>
    </>
  )
}

const RoadMapItem = ({url, content, roadmap}) => {
  return (
    <>
      <Box>
        <Image 
          src={url}
          mr={'auto'}
          ml={'auto'}
          py={5}
        />
        <Box
          textAlign={'center'}
          fontSize={3}
          fontWeight={'bold'}  
        >
          <Text fontSize={{base: 'sm', lg:'lg'}}>{content}</Text>
          <Text fontSize={{base: 'sm', lg:'lg'}}>{roadmap}</Text>
        </Box>
       
      </Box>
    </>
  )
}
export default RoadMap