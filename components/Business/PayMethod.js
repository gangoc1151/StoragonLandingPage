import { Box, Image, Text, VStack } from "@chakra-ui/react"
import {
  Center,
  Stack,
  Heading,
  Link,
  SimpleGrid
} from '@chakra-ui/react';

const PayMethod = () => {
  return (
    <>
      <VStack
        bgColor={'gray.2'}
        pt={10}
        px={{base: 7, md: 6}}
      >
        <Text
         fontSize={'3xl'}
          fontWeight={'500'}
          textAlign={'center'}>PAYMENT METHODS</Text>
        <Text textAlign={'center'}>Withdraw Profits By Means Of Payment That You Want, We Have Many Electronic Payment Methods Or Even Local And Global <br/> (Hovering on the logo, and will show you the payment minimum withdrawal)</Text>
        <SimpleGrid 
          columns={{ base: 1,md: 4, lg: 6 }} spacing={{ base: 5, lg: 5 }}
          maxW="7xl"
          ml={'auto'}
          mr={'auto'}
          direction={{ base: 'column', md: 'row' }}
          py={{base:0, md: 4}}
         >
          {PayMethods.map((paymethodItem) => {
            return <PayMethodItem 
              key={paymethodItem.id}
              name= {paymethodItem.name}
              image={paymethodItem.image}
            />
          })}
        </SimpleGrid>
       
      </VStack>
    </>
  )
}

const PayMethodItem = (props) => {
    
  const {name, image} = props
  return (
    <Center 
      py={5}>
      <Box
        boxShadow={'2xl'}
        rounded={'lg'}
        w={{base: '200px'}}
        overflow={'hidden'}
      >
        <Text 
          color={'white'}
          fontSize={'md'}
          fontWeight={500}
          bgColor={'green.1'}
          p={2}
          textAlign={'center'}
          >
          {name}
        </Text>

        <Image 
          src={image}
          justifySelf={'center'}
          px={8}
          py={2}
        />
      </Box>
     
    </Center>
  );
}

const PayMethods = [
  {
    id: 1,
    name: 'Payoneer',
    image:'/images/storagon/business/pay-payoneer.png'
  },
  {
    id: 2,
    name: 'QIWI Wallet',
    image:'/images/storagon/business/pay-qiwi.png'
  },
  {
    id: 3,
    name: 'CashU - كاش يو',
    image:'/images/storagon/business/pay-cashu.png'
  },
  {
    id: 4,
    name: 'Paysera',
    image:'/images/storagon/business/pay-Paysera.png'
  },
  {
    id: 5,
    name: 'Paypal',
    image:'/images/storagon/business/pay-Paypal.png'
  },
  {
    id: 6,
    name: 'Payeer',
    image:'/images/storagon/business/pay-Payeer.png'
  },
  {
    id: 7,
    name: 'Perfect Money',
    image:'/images/storagon/business/pay-Perfect_Money.png'
  },
  {
    id: 8,
    name: 'WebMoney',
    image:'/images/storagon/business/pay-WebMoney.png'
  },
  {
    id: 9,
    name: 'Advcash',
    image:'/images/storagon/business/pay-advcash.png'
  },
  {
    id: 10,
    name: 'Skrill',
    image:'/images/storagon/business/pay-Skrill.png'
  },
  {
    id: 11,
    name: 'Neteller',
    image:'/images/storagon/business/pay-Neteller.png'
  },
  {
    id: 12,
    name: 'Western Union',
    image:'/images/storagon/business/pay-WesternUnion.png'
  }
]
export default PayMethod