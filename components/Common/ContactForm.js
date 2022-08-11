import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Center,
  InputLeftElement,
  Textarea,
  Image,
} from '@chakra-ui/react';
import {
  MdOutlineEmail,
} from 'react-icons/md';
import {BsQuestionLg, BsPerson } from 'react-icons/bs';
import {FiSend} from 'react-icons/fi'

const ContactForm = () => {
  return (
    <>
     <Container maxW="1300px"  centerContent overflow="hidden">
      <Flex>
        <Box
          bg="gray.3"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Image src='/images/contactForm.png'/>
                  <Heading mt={2}>Have question?</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                  Get in touch with our sales team to learn more about how Storj DCS can help you store data with better security and privacy with up to 80% less cost.
                  </Text>
                </Box>
              </WrapItem>
              <WrapItem>
                  <Box width={'full'} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup bg="white" borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <InputGroup bg="white" borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="text">
                        <FormLabel>Question</FormLabel>
                        <InputGroup bg="white" borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsQuestionLg color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="text">
                        <FormLabel>Description</FormLabel>
                        <Textarea
                          bg="white"
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder=""
                        />
                      </FormControl>
                      <FormControl id="submit">
                        <Center>
                          <Button
                            fontSize={15}
                            type='submit'
                            variant="solid"
                            bg="green.1"
                            p={5}
                            rounded={'2xl'}
                            color="white"
                            leftIcon={<FiSend fontSize={20}/>}
                            >
                            Send Message
                          </Button>
                        </Center>
                      </FormControl>
                    </VStack>
                  </Box>
              </WrapItem>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </Container>
    </>
  )
}

export default ContactForm
