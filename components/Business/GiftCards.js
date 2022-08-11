import { SimpleGrid, VStack, Text, Image } from "@chakra-ui/react"

const GiftCards = () => {
  return (
    <>
      <VStack
      p={10}
      spacing={5}>
        <Text
        fontSize={'3xl'}
          fontWeight={'500'}>
          GIFT CARDS
        </Text>
        <Text
        >
          You Can Transfer Your Profits To A Gift Card Such As (Google Play, ITunes, Internet Credit, Etc.)
        </Text>
        <SimpleGrid 
          columns={{ base: 1, md: 4 }} 
          spacing={{ base: 5, lg: 8 }}>
          <Image 
            src='/images/storagon/business/idoom.png'
            boxSize='sx'
   
          />
          <Image 
            src='/images/storagon/business/googleplay.png'
            boxSize='sx'
          />
          <Image 
            src='/images/storagon/business/amazon.png'
          />
          <Image 
            src='/images/storagon/business/netflix.png'
          />
        </SimpleGrid>
      </VStack>
    </>
  )
}

export default GiftCards