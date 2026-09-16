import Hero from '../components/sections/Hero';
import AboutHome from '../components/sections/AboutHome';
import ProgramsHome from '../components/sections/ProgramsHome';
import AgePathways from '../components/sections/AgePathways';
import Process from '../components/sections/Process';
import WhyChoose from '../components/sections/WhyChoose';
import WhatWeOffer from '../components/sections/WhatWeOffer';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';
import BlogHome from '../components/sections/BlogHome';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutHome />
      <ProgramsHome />
      <AgePathways />
      <Process />
      <WhyChoose />
      <WhatWeOffer />
      <Testimonials />
      <CTASection bottomFill="fill-white" />
      <BlogHome />
    </>
  );
}
