import { Box, Image, Stack, VStack, Text, Icon } from "@chakra-ui/react"
import { Grid, GridItem } from '@chakra-ui/react'
import {IoLogoFacebook, IoLogoTwitter, IoLogoYoutube, IoLogoInstagram} from 'react-icons/io'


const BusinessBanner = () => {
  return (
    <>
      <Box
        bgImage="url('/images/storagon/business/businessbanner.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize='cover'
        position={'relative'}
        mt={'60px'}
        // h={{base: '1250px', md:'1050px'}}
        py={10}
      > 
      <Text
      color={'white'}
      textAlign='center'>
      PROFIT MODES
      </Text>
      <Text
      color={'white'}
      textAlign='center'>
      Learn More About Our Profit Modes
      </Text>
      <Grid
        // h='500px'
        // templateRows='repeat(4, 1fr)'
        // templateColumns='repeat(5, 1fr)'
        gap={4}
        maxW={'1200px'}
        mr={'auto'}
        ml={'auto'}
        px={5}
      >
        <GridItem 
          colSpan={2} 
          bg='white' 
          p={6}
          textAlign={'center'}>
          <Icon as={IoLogoTwitter} />
          <Text
          fontSize={'lg'}>
            PPD
          </Text>
          <Text>
            Earning 100% of completed downloads + profit from inviting someone
            through your referral link. If your referral bought a premium account, you
            take 20% of the account price.
          </Text>
        </GridItem>
        <GridItem 
          colSpan={2} 
          bg='white'
          p={6}
          textAlign={'center'} >
          <Icon as={IoLogoTwitter} />
          <Text>
            PPD
          </Text>
          <Text>
            Earning 100% of completed downloads + profit from inviting someone
            through your referral link. If your referral bought a premium account, you
            take 20% of the account price.
          </Text>
        </GridItem>
        <GridItem 
          colSpan={2} 
          bg='white'
          p={6}
          textAlign={'center'} >
          <Icon as={IoLogoTwitter} />

          <Text>
            PPD
          </Text>
          <Text>
            Earning 100% of completed downloads + profit from inviting someone
            through your referral link. If your referral bought a premium account, you
            take 20% of the account price.
          </Text>
        </GridItem>
        <GridItem 
          colSpan={2} 
          bg='white'
          p={6}
          textAlign={'center'} >
          <Icon as={IoLogoTwitter} />

          <Text>
            PPD
          </Text>
          <Text>
            Earning 100% of completed downloads + profit from inviting someone
            through your referral link. If your referral bought a premium account, you
            take 20% of the account price.
          </Text>
        </GridItem>
        <GridItem 
          colSpan={{base: 2, md: 4} }
          bg='white'
          p={6}
          textAlign={'center'} >
          <Icon as={IoLogoTwitter} />

          <Text>
            PPD
          </Text>
          <Text>
            Earning 100% of completed downloads + profit from inviting someone
            through your referral link. If your referral bought a premium account, you
            take 20% of the account price.
          </Text>
        </GridItem>
      </Grid>
      {/* <Image 
        src={'/images/storagon/business/wave.png'}
        position='absolute'
        w={'100%'}
        bottom={-1}
       
      /> */}
     
      
      </Box>
    </>
  )
}

export default BusinessBanner