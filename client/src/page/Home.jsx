import React from "react";
import Hero from "../components/Hero";
import FeaturedServices from "../components/FeaturesService.jsx"
import CallToAction from "../components/CallAction.jsx"
import MediChatbot from "../components/MediChatBot.jsx"
import About from "../components/About.jsx"
import Stats from "../components/Stats.jsx"
import Feature from "../components/Feature.jsx"
import ServicesSection from "../components/ServicesSection.jsx"
import Doctor from "../components/Doctor";
import TestimonialSection from "../components/Testimonial.jsx"
import Gallery from "../components/Gallery.jsx"
import Subscript from "../components/Subscript";
// import FAQ from "../components/FreqAsk.jsx"

import Department from "../components/Department";
import MessageForm from "../components/MessageForm";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices/>
      <CallToAction/>
      <MediChatbot/>
      <About/>
      <Stats/>
      <Feature/>
      <ServicesSection/>
      <Department />
      <TestimonialSection/>
      <Doctor />
      <Gallery/>
      <Subscript />
      {/* <FAQ/> */}
      <MessageForm />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
