import {NavbarComponent} from '../../components/marketing/NavbarComponent';
import FooterComponent from '../../components/marketing/FooterComponent';
import React from 'react'
import { TopSection } from '../../components/marketing/TopSection'
import ServiceSection from '../../components/marketing/ServiceSection'
import AticalSection from '../../components/marketing/AticalSection'
import TestimonialSection from '../../components/marketing/TestimonialSection'


const MarketingTemplate = () => {
  return (
    <div>
       <div className='xl:mx-60 lg:mx-30 mx-0'>
       <NavbarComponent/>
       </div>
       <div className='mt-32 xl:mx-60 lg:mx-60 mx-0'>
       <TopSection/>
       </div>
       <br />
       <div className='w-full bg-marketing-main-color py-32 mt-32'>
         <ServiceSection/>
       </div>
       <div className='mt-32'>
         <AticalSection/>
       </div>
       <div className='mx-60'>
       <TestimonialSection/>
       </div>
       <div>
        <FooterComponent/>
       </div>
      </div>
  );
};
export default MarketingTemplate;

