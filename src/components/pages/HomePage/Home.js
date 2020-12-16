import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjFour, homeObjOne, homeObjTwo, homeObjThree } from './Data';
function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing></Pricing>
      <HeroSection {...homeObjFour} />
    </div>
  );
}

export default Home;
