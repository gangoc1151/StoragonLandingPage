import React from 'react';
import Banner from '../components/HomeOne/Banner';
import Devices from '../components/Common/Devices';
import Portfolio from '../components/Common/Portfolio';
import OurFeature from '../components/Common/OurFeature';
import AppDownload from '../components/Common/AppDownload';
import RegisterAreaTwo from '../components/Common/RegisterAreaTwo';
import Pricing from '../components/Common/Pricing';

import Community from '../components/HomeOne/Community';
import SocialBar from '../components/Layout/SocialBar';

import RoadMap from '../components/HomeOne/RoadMap';

const Index = () => {
  
  return (
    <> 
      <Banner />
      <Portfolio />
      <Community />
      <RoadMap />
      <Devices />
      <OurFeature title='What makes Storagon outstanding' />
      {/* <Pricing/> */}
      <AppDownload />
      {/* <RegisterAreaTwo title='Your security and privacy, our priority!' /> */}
    </>
  );
};

export default Index;
