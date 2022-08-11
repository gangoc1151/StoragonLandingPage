import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { VStack, Stack } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
const OurFeature = ({title}) => {
  return (
    <>
     <Box
      py={5}
      bgColor={'#FFFEEC'}
      bgGradient={[
        'linear(to-b, white, #BEF0FF)'
      ]}
      >
      <div className='container'>
          <div className='section-title'>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', md: '3xl', lg:'4xl' }}
            color={'heading.1'}
            >{title}
          </Heading>
              <Text 
                fontSize={{base: 'sm', lg:'lg'}}
                px={5}
                >Whatever other services do, Storagon makes it more convenient and more fascinating
              </Text>
          </div>
          <div className='row justify-content-center'>
          { FEATURE_ITEM.map((navItem) => (
            <FeatureItem 
              key={navItem.label}
              label={navItem.label}
              conent={navItem.content}
              image={navItem.image}
                
            />
          ))}
          </div>
      </div>
     </Box>
    </>
  );
};

const FeatureItem = ({label, conent, image}) => {
  return (
    <>
      <div className='col-lg-4 col-md-6 col-sm-6'>
        <div className='single-features-box'>
        <VStack spacing={7} h={'300px'}>
          <Image 
            ml='auto' 
            mr='auto' 
            src={image} 
            alt='image' 
            h={'100px'}
            />
            <h3>{label}</h3>
            <Text
              fontSize={{base: 'sm', lg:'md'}}>
              {conent}
            </Text>
             
        </VStack>
        </div>
      </div>
    </>
  )
}

const FEATURE_ITEM = [
  {
    label: 'Secure and Private',
    content: "All data and communication on Storagon are inaccessible to everyone else without your permission, including Storagon's system.",
    image: '/images/features/storagon-feature1.svg'
  },
  {
    label: 'Barrier-free Synchronization',
    content: 'You can sync all or a part of your data from most storage services to Storagon space, and set it run quietly in the background.',
    image: '/images/features/icon12.svg'
  },
  {
    label: 'All devices friendly',
    content: 'Storagon works seamlessly on all devices and operating systems. The world is in your pocket.',
    image: '/images/features/icon13.svg'
  },
  {
    label: 'Incredible earning opportunities',
    content: 'With Storagon, you do not only save your files. You can earn lots of money via various channels.',
    image: '/images/features/icon14.svg'
  },
  {
    label: 'Unbeatable price',
    content: 'Storagon has different fee options, and all are affordable and unbeatable prices.',
    image: '/images/features/storagon-feature2.svg'
  },
  {
    label: 'Users are the only focus',
    content: "Storagon commits to putting users' benefits above all the economic interests.",
    image: '/images/features/icon15.svg'
  },
];

export default OurFeature;
