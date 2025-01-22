import React from "react";
import Page1 from "../pages/Hero/Page1";
import Page2 from '../pages/Hero/Page2';
import Page3 from '../pages/Hero/Page3';
import Page4 from '../pages/Hero/Page4';
import Page5 from '../pages/Hero/Page5';
import Page6 from '../pages/Hero/Page6';
import Page7 from '../pages/Hero/Page7';
import Page8 from '../pages/Hero/Page8';


const Hero = () => {
  return (
    <div>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <hr className="border-black border-1"/>
      <Page7/>
      <Page8/>      
    </div>
  );
};

export default Hero;
