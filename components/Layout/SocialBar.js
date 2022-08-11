import { Box, Link, Icon } from '@chakra-ui/react';

import {IoLogoFacebook, IoLogoTwitter, IoLogoYoutube, IoLogoInstagram} from 'react-icons/io'
import {BsTelegram, BsDiscord} from 'react-icons/bs'

const SocialBar = () => {
    return (
        <>
          <Box
            position={'fixed'}
            top={'50%'}
            transform={'translateY(-50%)'}
            bgColor={'green.100'}
            zIndex={1}
            display={{base: 'none', lg: 'unset'}}
          > 
            <Link
              href='https://www.facebook.com/Storagon/'
              display={'block'}
              textAlign={'center'}
              padding={'16px'}
              isExternal
              bgColor={'#3B5998'}
              transition={'all 0.3s ease'}
              _hover={{
                color:'black'
              }}
              color={'white'}
              fontSize={'20px'}>
              <Icon as={IoLogoFacebook} />
            </Link>
            <Link
              href='https://twitter.com/storagon'
              display={'block'}
              textAlign={'center'}
              padding={'16px'}
              isExternal
              transition={'all 0.3s ease'}
              color={'white'}
              bgColor={'#55ACEE'}
              fontSize={'20px'}
              _hover={{
                color:'black'
              }}>
              <Icon as={IoLogoTwitter} />
            </Link>
            <Link
              href='https://discord.gg/DuSpRef924'
              display={'block'}
              textAlign={'center'}
              padding={'16px'}
              isExternal
              transition={'all 0.3s ease'}
              bgColor={'#5865F2'}
              color={'white'}
              fontSize={'20px'}
              _hover={{
                color:'black'
              }}>
              <Icon as={BsDiscord} />
            </Link>
            <Link
              href='https://t.me/storagon'
              display={'block'}
              textAlign={'center'}
              padding={'16px'}
              isExternal
              transition={'all 0.3s ease'}
              bgColor={'#229ED9'}
              color={'white'}
              fontSize={'20px'}
              _hover={{
                color:'black'
              }}>
              <Icon as={BsTelegram} />
            </Link>
          </Box>
        </>
    )
}

export default SocialBar