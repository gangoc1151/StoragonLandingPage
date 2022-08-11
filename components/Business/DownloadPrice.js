import { VStack, Text } from "@chakra-ui/react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  SimpleGrid,
  Box,
} from '@chakra-ui/react'


const DownloadPrice = () => {
  return (
    <>
      <VStack 
        pb={10}
        pt={2}
        px={5}
      >
        <Text
          fontSize={'3xl'}
          fontWeight={'500'}
          >
          Download Prices
        </Text>
        <Text
          fontSize={'lg'}
        >
          We Give You The Best Pricing. Profits Of Up To 10 Dollar Per 1000 Download!
        </Text>
        <SimpleGrid 
          maxW={'4xl'}
          w={'100%'}
          columns={{ base: 4}} 
          spacing={{ base: 5, lg: 10 }}
          textAlign={'center'}
          p={1}>
          <Text
            bgColor={'green.1'}  
            p={4}
            color={'white'}
            fontWeight={'600'}
          >
            Groups / Filesizes
          </Text>
          <Text
            bgColor={'green.1'} 
            p={4}
            color={'white'}
            fontWeight={'600'}
          >
           0 MB to 100 MB
          </Text>
          <Text
            bgColor={'green.1'} 
            p={4}
            color={'white'}
            fontWeight={'600'}
          >
            100 MB to 1000 MB
          </Text>
          <Text
            bgColor={'green.1'} 
            p={4}
            color={'white'}
            fontWeight={'600'}
          >
            1000 MB to * MB
          </Text>
        </SimpleGrid>
    
       
        
      </VStack>
      <Box
          maxW={'4xl'} 
          w={'100%'}
          marginLeft={'auto'}
          marginRight={'auto'}
          pb={10}
          px={5}
        >
          <table 
          >
            <tbody>
            <tr>
                <th>Group 1</th>
                <td>$7</td>
                <td >$8</td>
                <td >$20</td>
              </tr>
           
            
              <tr>
                <th>Group 2</th>
                <td>$4</td>
                <td >$5</td>
                <td >$6</td>
              </tr>
              <tr>
                <th>Group 3</th>
                <td>$3</td>
                <td >$4</td>
                <td >$5</td>
              </tr>
              <tr>
                <th>Group 4</th>
                <td>$2</td>
                <td>$2</td>
                <td>$3</td>
              </tr>
            </tbody>
             
           
          </table>
        </Box>
    </>
  )
}

export default DownloadPrice