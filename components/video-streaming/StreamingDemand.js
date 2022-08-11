import { Box, Flex, HStack, Image, Text, VStack, Stack, Heading } from "@chakra-ui/react"
import ContactForm from "../Common/ContactForm"

const StreamingDemand = () => {
  return (
    <>
    <Box 
      bgGradient={[
        'linear(to-b,  #CEF8FF, #D9D4FF)'
        ]}
        py={5}>
      <VStack>
        <Heading
        fontSize={{ base: '2xl', md: '3xl'}}>
          Video demand is exploding, and won't slow down anytime soon.
        </Heading>
        <Stack 
          maxW={'3xl'}
          p={5}
          spacing={5}>
          {Demands.map((demand) => {
            return (
              <DemandItem 
                key={demand.id}
                image={demand.image}
                content={demand.content}
              />
            )
          })}
        </Stack>
        {/* <ContactForm/> */}
      </VStack>
        </Box>
    
    </>
  )
}
const DemandItem = (props) => {
  const {image, content} = props
  return (
    <HStack alignItems={'center'} spacing={5}>
      <Image rounded={'md'} src={image}/>
      <Text fontSize={{base: 'sm', lg:'lg'}}>
        {content}
      </Text>
    </HStack>
  )
}

const Demands = [
  {
    id: 1,
    image: '/images/storagon/video-demand/demand1.png',
    content: 'Globally, IP video traffic will be 82 percent of all consumer Internet traffic by 2021, up from 73 percent in 2016.'
  },
  {
    id: 2,
    image: '/images/storagon/video-demand/demand2.png',
    content: 'In 2021, it would take an individual more than 5 million years to watch the amount of video that will cross global IP networks each month.'
  },
  {
    id: 3,
    image: '/images/storagon/video-demand/demand3.png',
    content: 'As of 2021, live video streamed to billions of devices around the world accounting for over 13 percent of online video traffic.'
  },
  {
    id: 4,
    image: '/images/storagon/video-demand/demand4.png',
    content: 'Live video will grow 15-fold from 2016 to 2021.The amount of VoD traffic in 2021 will be equivalent to 7.2 billion DVDs per month.'
  },
  {
    id: 5,
    image: '/images/storagon/video-demand/demand5.png',
    content: 'Virtual reality and augmented reality traffic will increase 20-fold between 2016 and 2021, at a CAGR of 82 percent.'
  },
  {
    id: 6,
    image: '/images/storagon/video-demand/demand6.png',
    content: 'Globally, 3.4 percent of all Internet video traffic will be from video surveillance in 2021, up from 1.8 percent in 2016.'
  },
  {
    id: 7,
    image: '/images/storagon/video-demand/demand7.png',
    content: 'Every second, a million minutes of video content will cross the network by 2021.'
  }
]

export default StreamingDemand