import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Icon,
  HStack
} from '@chakra-ui/react';
import {IoLogoFacebook, IoLogoTwitter, IoLogoYoutube, IoLogoInstagram} from 'react-icons/io'
import {BsTelegram, BsDiscord} from 'react-icons/bs'


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bgColor={'white'}
     >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={4}>
            <Box>
              <Image src='/images/banner/storagon-logo.svg' alt='logo'
                w='150px'
              />
            </Box>
            <Text fontSize={'sm'}>
              © STORAGON 2022 <br/> All rights reserved.
            </Text>
            <Text fontSize={'sm'}>
              Follow STORAGON:
            </Text>
            <HStack>
              <Link
                href='https://www.facebook.com/Storagon/'
                display={'block'}
                textAlign={'center'}
                transition={'all 0.3s ease'}
                isExternal
                color={'black'}
                fontSize={'20px'}>
                <Icon as={IoLogoFacebook} />
              </Link>
              <Link
                href='https://twitter.com/storagon'
                display={'block'}
                textAlign={'center'}
                isExternal
                transition={'all 0.3s ease'}
                color={'black'}
                fontSize={'20px'}
                >
                <Icon as={IoLogoTwitter} />
              </Link>
              <Link
                href='https://discord.gg/DuSpRef924'
                display={'block'}
                textAlign={'center'}
                isExternal
                transition={'all 0.3s ease'}
                color={'black'}
                fontSize={'20px'}
               >
                <Icon as={BsDiscord} />
              </Link>
              <Link
                href='https://t.me/storagon'
                display={'block'}
                textAlign={'center'}
                isExternal
                transition={'all 0.3s ease'}
                color={'black'}
                fontSize={'20px'}
                >
                <Icon as={BsTelegram} />
              </Link>
            </HStack>
          
          </Stack>
          <Stack align={'flex-start'} fontSize={{base: 'sm', lg:'lg'}} >
            <ListHeader >Features</ListHeader>
            <Link href={'/decentralized-cloud'} color={'gray.500'}>Cloud Service</Link>
            <Link href={'/video-streaming'} color={'gray.500'}>Streaming Engine</Link>
            <Link href={'#'} color={'gray.500'}>NFT Files Market</Link>
            <Link href={'#'} color={'gray.500'}>Native DApps</Link>
          </Stack>
          <Stack align={'flex-start'} fontSize={{base: 'sm', lg:'lg'}} >
            <ListHeader>Resources</ListHeader>
              <Link href={'https://docs.storagon.io/storagon/about-storagon/what-is-storagon'} color={'gray.500'}>Whitepaper</Link>
              <Link href={'https://docs.storagon.io/storagon/roadmap'} color={'gray.500'}>Roadmap</Link>
              <Link href={'https://docs.storagon.io/storagon/ido-plan?q=ido'} color={'gray.500'}>IDO</Link>
              <Link href={'https://docs.storagon.io/storagon/tokenomics/stg-distribution-plan'} color={'gray.500'}>STG token</Link>
          </Stack>
          <Stack align={'flex-start'} fontSize={{base: 'sm', lg:'lg'}} >
          <ListHeader>Company</ListHeader>
            <Link href={'#'} color={'gray.500'}>About Us</Link>
            <Link href={'/pricing'} color={'gray.500'}>Pricing</Link>
            <Link href={'#'} color={'gray.500'}>Referral Program</Link>
            <Link href={'#'} color={'gray.500'}>Blog</Link>
           
          </Stack>
          <Stack align={'flex-start'} fontSize={{base: 'sm', lg:'lg'}} >
            <ListHeader>Support</ListHeader>
              <Link href={'#'} color={'gray.500'}>Help Center</Link>
              <Link href={'#'} color={'gray.500'}>Contact Us</Link>
            
          </Stack>
          <Stack align={'flex-start'} fontSize={{base: 'sm', lg:'lg'}} >
            <ListHeader>Legal</ListHeader>
              <Link href={'#'} color={'gray.500'}>Terms of Service</Link>
              <Link href={'#'} color={'gray.500'}>Privacy Policy</Link>
          </Stack>
          
        </SimpleGrid>
      </Container>
    </Box>
  );
}