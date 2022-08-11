import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Image,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Stack
} from '@chakra-ui/react'

const EncryptionSteps = () => {
  return (
    <>
      <Box
        bgGradient={[
        'linear(to-b,  #FFF9EF, #FFFCFF, #C5F2FF)'
        ]}
        > 
        <Container
         maxW={'4xl'} pt={12}>
         <SimpleGrid
            columns={{ base: 1, md: 2 }} 
            gridAutoFlow='dense'
            gridGap={5}>
         {EncryptionStep.map((StepItem) => (
            
              <EncryptionStepItem
                key={StepItem.id}
              StepItem={StepItem}
                StepTitle={StepItem.title}
              />
           
         ))}
         </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

const EncryptionStepItem = ({StepItem, StepTitle}) => {
  // if (StepItem.id === 1 || StepItem.id === 3){
  //   return (
  //     <SimpleGrid 
  //       columns={{ base: 1, md: 2 }} 
  //       gridAutoFlow='dense'
  //       gridGap={3}
  //     >
  //     <Flex justifyContent='center'>
  //       <Image
  //         objectFit={'contain'}
  //         src={StepItem.image}
  //         boxSize={{base: 'sm', lg: 'xl'}}
  //       />
  //     </Flex>
  //     <Stack spacing={3} alignSelf='center'>
  //       <Box 
  //         size='md'
  //         fontSize={'sm'}
  //         backgroundColor={'#091C45'}
  //         color={'white'}
  //         width={'100px'}
  //         borderRadius={'24px'}
  //         fontWeight={'600'}
  //         textAlign='center'
  //         py={3}
  //         >
  //         {StepItem.step}
  //       </Box>
  //       <Heading  fontSize={{ base: '2xl', md: '2xl'}}>Objects are encrypted.</Heading>
  //       {/* <Box>
  //         <Text color={'text.1'} fontSize={{base: 'sm', lg:'lg'}}>
  //         Storj DCS (Decentralized Cloud Storage) automatically encrypts all files before being uploaded--your data is only in your hands and those you share it with.                
  //         </Text>
  //       </Box> */}
  //       {/* <AccordionContent /> */}
  //     </Stack>
  //   </SimpleGrid>
  //   )
  // }
  return (
    <VStack>
      <Box 
      maxW={'400px'}>
      <Stack spacing={3} >
        <Box 
          size='md'
          fontSize={'sm'}
          backgroundColor={'#091C45'}
          color={'white'}
          width={'100px'}
          borderRadius={'24px'}
          fontWeight={'600'}
          textAlign='center'
          py={3}
          >
          {StepItem.step}
        </Box>
        <Heading fontSize={{ base: '2xl', md: '2xl'}}>{StepTitle}</Heading>
        {/* <Box>
          <Text color={'text.1'} fontSize={{base: 'sm', lg:'lg'}}>
          Storj DCS (Decentralized Cloud Storage) automatically encrypts all files before being uploaded--your data is only in your hands and those you share it with.                
          </Text>
        </Box> */}
        {/* <AccordionContent /> */}
      </Stack>
        <Image
          objectFit={'contain'}
          src={StepItem.image}
          boxSize={{base: 'sm', lg: 'sm'}}
        />
      </Box>
    </VStack>
    

  )
}

const AccordionContent = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionContentItem />
      <AccordionContentItem />
      <AccordionContentItem />
    </Accordion>
  )
}

const AccordionContentItem = () => {
  return (
    <AccordionItem
      backgroundColor={'#F2F5F8'}
      my={2}
      borderRadius={5}
      py={3}
      borderTopWidth={0}
    >
      <h2>
        <AccordionButton 
          _hover={
            {backgroundColor: '#F2F5F8'}
          }>
          <Box 
            flex='1' 
            textAlign='left'
            fontWeight={600}
            fontSize={{base: 'sm', lg:'lg'}} 
          >
            Can Storj see the data I store? 
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}
      fontSize={{base: 'sm', lg:'lg'}} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  )
}

const EncryptionStep = [
  {
    id: 1,
    step: 'STEP 1',
    title: 'Data is encrypted when uploaded',
    content: 'Storj DCS (Decentralized Cloud Storage) automatically encrypts all files before being uploaded--your data is only in your hands and those you share it with.',
    image:'/images/storagon/Encryption1.png',
    subContent: [
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      },
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      },
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      }
    ]
  },
  {
    id: 2,
    step: 'STEP 2',
    title: 'Encrypted objects are split',
    content: 'Storj DCS (Decentralized Cloud Storage) automatically encrypts all files before being uploaded--your data is only in your hands and those you share it with.',
    image:'/images/storagon/Encryption2.png',
    subContent: [
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      },
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      },
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      }
    ]
  },
  {
    id: 3,
    step: 'STEP 3',
    title: 'Fragments are distributed globally',
    content: 'Storj DCS (Decentralized Cloud Storage) automatically encrypts all files before being uploaded--your data is only in your hands and those you share it with.',
    image:'/images/storagon/Encryption3.png',
    subContent: [
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      },
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      },
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      }
    ]
  },
  {
    id: 4,
    step: 'STEP 4',
    title: 'Fragments can be downloaded and reassembled',
    content: 'Storj DCS (Decentralized Cloud Storage) automatically encrypts all files before being uploaded--your data is only in your hands and those you share it with.',
    image:'/images/storagon/Encryption4.png',
    subContent: [
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      },
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      },
      {
        title: 'Can Storj see the data I store?',
        content: 'No. Files are encrypted, split into pieces, and stored on geographically diverse Nodes, making data breaches a thing of the past.'
      }
    ]
  }
]

export default EncryptionSteps