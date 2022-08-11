import {
    Box,
    Center,
    Text,
    Stack,
    Heading,
    Link,
    SimpleGrid,
    VStack,
    Flex,
    HStack,
    Button
} from '@chakra-ui/react';

const PricingBanner = () => {
  return (
    <>
      <Box
      bgSize='contain'
      mt={'55px'}
      justifyContent={'center'}
      bgGradient={[
        'linear(to-b, #FFF6DC, #FFFCFF)'
        ]}
      > 
        <Stack
          as={Box}
          textAlign={'center'}
          justifyContent={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 26 }}
          
          >
          <Box>
            <Heading
              fontWeight={700}
              fontSize={{ base: '2xl', md: '3xl'}}
              color={'heading.1'}
              >
             Register for the storage
            </Heading>
            <Text 
                maxW={'5xl'}
                mt={5}
                px={5}
                ml={'auto'}
                mr={'auto'}
                fontSize={{base: 'sm', md:'lg'}} 
            >Storagon has different fee options for users to choose from, and all of them are the most affordable and unbeatable prices.</Text>
            <Text fontSize={{base: 'sm', md:'lg'}} >- Free-riders package at no cost for basic demands</Text>
            <Text fontSize={{base: 'sm', md:'lg'}} >- Premium packages for all advanced services with a minimal fee of $4/month.</Text>
          </Box>
        </Stack>
        <SimpleGrid 
          columns={{ base: 1, lg: 4 }} spacing={{ base: 5, lg: 8 }}
          maxW="7xl"
          ml={'auto'}
          mr={'auto'}
          alignItems={'stretch'}
          direction={{ base: 'column', md: 'row' }}
          py={{base:0, md:10}}
          px={{base: 7, md: 4}}>
            <Pricing 
              bgColor={'green.1'}
              textColor={'white'}
              title={'FREE RIDERS'}
              storageTitle={'STORAGE CAPACITY'}
              storageSize={'50 GB/month'}
              bandwidthSize={'150GB'}
              SpeedStatus={'Unlimited'}
              MonetiseChanels={'3 Channels'}
              Price={'FREE'}
              />
            <Pricing 
              bgColor={'#38AAEC'}
              textColor={'white'}
              title={'PREMIUM DOWNLOADER'}
              storageTitle={'STORAGE COST PER MONTH*'}
              storageSize={'Unlimited*'}
              bandwidthSize={'$7/TB'}
              SpeedStatus={'Unlimited'}
              MonetiseChanels={'3 Channels'}
              Price={
              <Box>
                <Box>US$4/TB/mth</Box>
                <Box>US$40/TB/yr</Box>  
              </Box>
              }
            />
             <Pricing 
              bgColor={'#38AAEC'}
              textColor={'white'}
              title={'PREMIUM UPLOADER'}
              storageTitle={'STORAGE COST PER MONTH*'}
              storageSize={'50 GB/month*'}
              bandwidthSize={'$7/TB'}
              SpeedStatus={'Unlimited'}
              MonetiseChanels={'6 Channels'}
              Price={
              <Box>
                <Box>US$8/TB/mth</Box>
                <Box>US$80/TB/yr</Box>  
              </Box>
              }
            />
             <Pricing 
              bgColor={'#FFBC4E'}
              textColor={'white'}
              title={'PREMIUM LEADER'}
              storageTitle={'STORAGE COST PER MONTH*'}
              storageSize={'Unlimited*'}
              SpeedStatus={'Unlimited'}
              bandwidthSize={'$7/TB'}
              MonetiseChanels={'6 Channels'}
              Price={
              <Box>
                <Box>US$10/TB/mth</Box>
                <Box>US$100/TB/yr</Box>  
              </Box>
              }
              
            />
        </SimpleGrid>
        <VStack 
          textAlign={'center'}
          justifyContent={'center'}
          pb={7}>
          <HStack spacing={3} fontSize={{base:'lg'}}>
            <Link 
              href='#'
              textDecoration={'underline'}
              _hover={{
                color: '#29D0BE'
              }}
              color={'button.4'}
            >Learn more</Link>
            <Link 
              as={Button}
              href='#'
              _hover={{
                textDecoration: 'none',
                bgColor: '#29D0BE'
              }}
              bgColor={'#0BBDAA'}
              color={'white'}

            >Start for free</Link>
          </HStack>
        </VStack>
      </Box>
    </>
  )
}

  
const Pricing = (props) => {
    
    const {bgColor, textColor, title,Price, content, storageTitle,MonetiseChanels, storageSize, bandwidthTitle, bandwidthSize, SpeedStatus} = props
    return (
      <Center 
        py={6}
        >
        <Box
          boxShadow={'2xl'}
          rounded={'md'}
          w={{base: '300px', md: '300px', lg:'350px'}}
          overflow={'hidden'}
          h={'100%'}
          bgColor={bgColor}>
          <Stack
            p={5}
          >
            <Text
              fontSize={'3xl'}
              fontWeight={700}
              color={textColor}
              rounded={'full'}>
              {title}
            </Text>
            <Stack 
              direction={'row'}
              flexWrap={'wrap'}
              >
              {/* <Text 
                color={textColor}
                fontSize={'md'}
                fontWeight={500}
                >
                  {content}
              </Text> */}
            </Stack>
          </Stack>
  
          <Box px={5} py={4}  >
            <Box >
              <Text 
                color={textColor}
                fontSize={'md'}
                >
                STORAGE CAPACITY
              </Text>
              <Text 
                color={textColor}
                fontSize={'3xl'}
                fontWeight={700}>
                {storageSize}
              </Text>
            </Box>
            <Box 
              h={'1px'}
              bgColor={textColor}
            ></Box>
            <Box mt={3}>
              <Text 
                color={textColor}
                fontSize={'md'}
              >
               SPEED
              </Text>
              <Text 
                color={textColor}
                fontSize={'3xl'}
                fontWeight={700}>
                {SpeedStatus}
              </Text>
            </Box>
            <Box 
              h={'1px'}
              bgColor={textColor}
            ></Box>
            <Box mt={3}>
              <Text 
                color={textColor}
                fontSize={'md'}
              >
                BANDWIDTH (OWN FILES)
              </Text>
              <Text 
                color={textColor}
                fontSize={'3xl'}
                fontWeight={700}>
                {bandwidthSize}
              </Text>
            </Box>
            <Box 
              h={'1px'}
              bgColor={textColor}
            ></Box>
            <Box mt={3}>
              <Text 
                color={textColor}
                fontSize={'md'}
              >
                MONETISE CHANNELS 
              </Text>
              <Text 
                color={textColor}
                fontSize={'3xl'}
                fontWeight={700}>
                {MonetiseChanels}
              </Text>
            </Box>
            <Box 
              h={'1px'}
              bgColor={textColor}
            ></Box>
            <Box mt={3}>
              <Text 
                color={textColor}
                fontSize={'md'}
              >
                PRICE
              </Text>
              <Text 
                color={textColor}
                fontSize={'3xl'}
                fontWeight={700}>
                {Price}
              </Text>
            </Box>
          </Box>
        </Box>
      </Center>
    );
  }

export default PricingBanner