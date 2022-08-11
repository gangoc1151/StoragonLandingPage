import React, { useState, useEffect } from 'react';
import {
  Image,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
      <Box 
        top={'0'}
        left={'0'}
        width={'100%'}
        zIndex={'999'}
        position={'fixed'}
        bgColor={'white'}
        boxShadow={'0 2px 28px 0 rgba(0, 0, 0, 0.09'}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          // color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          mt={1}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          maxW={'1440px'}
          ml={'auto'}
          mr={'auto'}
          >
          <Flex flex={{ base: 1 }} justify={'start'}>
            <Link href='/'>
              <Image src='/images/banner/storagon-logo.svg' alt='logo'
                w='150px'
              />
            </Link>

            <Flex display={{ base: 'none', lg: 'flex' }} ml={{base:'30', xl: '100px', '2xl':'150px'}}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            alignItems='center'
            direction={'row'}
            spacing={4}
            display={{ base: 'none', lg: 'inline-flex' }}>
            <Button
            as={Link}
            fontSize={{base: 'lg'}}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'https://app.storagon.io/login'}
              _hover={{
                bg: 'pink.300',
                textDecoration: 'none',
                color: 'white'
              }}>
              Connect Wallet
            </Button>
          </Stack>
          <Flex
            display={{ base: 'flex', lg: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={9} h={9} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Flex>
        <Box
          position='absolute'
          w='full'
          borderBottom='1px'
          borderBottomColor='gray.200'>
          <Collapse 
            in={isOpen} animateOpacity
          >
            <MobileNav />
          </Collapse>
        </Box>
      </Box>
  );
}


const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} 
      spacing={{base: 10, xl: 20}} alignItems='center'>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box display='flex' alignItems='center'>
                {navItem.href ?  
                  <Link
                    href={navItem.href}
                    fontSize={{base: 'lg'}}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}>
                    {navItem.label}
                  </Link> :
                  <Box
                    fontSize={{base: 'lg'}}
                    fontWeight={500}
                    cursor={'pointer'}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}>{navItem.label}
                  </Box>}
               
               {navItem.children && <ChevronDownIcon boxSize={5}/>} 
              </Box>
            </PopoverTrigger>
            
             
            {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: '#D3EEFD' }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#267AE8' }}
            fontSize={'lg'}
            fontWeight={500}>
            {label}
          </Text>
          <Text _groupHover={{ color: 'black' }} fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'#267AE8'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ lg: 'none' }}
      >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Box>
        <Button
          fontSize={{base: 'md'}}
          fontWeight={600}
          color={'white'}
          bg={'pink.400'}
          href={'#'}
          _hover={{
            bg: 'pink.300',
          }}>
          Connect Wallet
        </Button>
      </Box>
     
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          fontSize={{base: 'md'}}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
          fontSize={{base: 'md'}}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'What is Storagon',
    href: '/',
  },
  {
    label: 'Features',
    children: [
      {
        label: 'Decentralized Cloud',
        subLabel: 'Discovery Storagon cloud service',
        href: '/decentralized-cloud',
      },
      {
        label: 'P2P Streaming Engine',
        subLabel: 'Ultimate streaming service',
        href: '/video-streaming',
      },
      {
        label: 'NFT Files Market',
        subLabel: 'Exchange NFTs',
        href: '#',
      },
      {
        label: 'Native DApps',
        subLabel: 'Extraodiary Platforms',
        href: '#',
      }
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Whitepaper',
        subLabel: 'Project Details',
        href: 'https://docs.storagon.io/storagon/about-storagon/what-is-storagon',
      },
      {
        label: 'Roadmap',
        subLabel: 'The furture plan',
        href: 'https://docs.storagon.io/storagon/roadmap',
      },
      {
        label: 'IDO',
        subLabel: 'IDO Schedule',
        href: 'https://docs.storagon.io/storagon/ido-plan',
      },
      {
        label: 'STG token',
        subLabel: 'Storagon native currency',
        href: 'https://docs.storagon.io/storagon/tokenomics/stg-distribution-plan',
      },
    ],
  },
  {
    label: 'Business',
    href: '/business',
  }
];
export default Navbar;
