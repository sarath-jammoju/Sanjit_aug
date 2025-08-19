import React from 'react';
import Hero from '../Components/Hero/Hero';
import Services from '../Components/Services/Services.jsx'
import WhyChoose from '../Components/WhyChoose/WhyChoose.jsx';
import AboutUs from '../Components/AboutUs/AboutUs.jsx';
import Review from '../Components/Reviewbox/Review.jsx';
import ContactUs from '../Components/ContactUs/ContactUs.jsx';
import WhyChooseFaq from '../Components/whyChooseFaq/WhyChooseFaq.jsx';
const Home = () => {
    return (
        <>
        <Hero/>
        <Services/>
        <WhyChoose/>
        <AboutUs/>
        {/* <Review/> */}
        <div id="faqs">
        <WhyChooseFaq />
        </div>
        <ContactUs/> 
        </>
    );
};

export default Home;