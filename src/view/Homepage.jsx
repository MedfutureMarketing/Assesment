import React from 'react';
import HomeNav from '../components/HomeNav'
import HeroSection from '../components/HeroSection'
import FlagCarousel from '../components/FlagSwiper'
import WhyAu from '../components/WhyAu';
import MovetoAU from '../components/MovetoAu';
import CanApply from '../components/WhocanApply';
import IntGp from '../components/IntGp';
import JobList from '../components/JobCard';
import JobApplicationForm from '../components/ContactForm'
import TestimonialsSection from '../components/Testimonials'
import banner from '../assets/home/banner.png'
import Faq from '../components/FaQ';
import Awards from '../components/AwardS';
import ThreeGridSection from '../components/ThreeGrid';

export default function Homepage() {
  return (
    <div>
      <HomeNav />
      <HeroSection />
      <FlagCarousel />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Column - 7/12 width */}
          <div className="md:col-span-8 p-6 rounded-lg shadow">
            <WhyAu />
            <MovetoAU />
            <CanApply />
            <IntGp />
            <JobApplicationForm />
            {/* 🔧 Add more content here if needed */}
          </div>

          {/* Right Column - 5/12 width */}
          <div className="md:col-span-4 bg-gray-50 p-0 rounded-lg shadow">
            <div className='bg-gradient-to-r from-slate-800 to-blue-900 p-5 rounded-lg '><span className='text-2xl text-white'>browser Job</span></div>
            <h1 className="text-2xl mb-0 px-6 font-sans text-center py-2 mt-5 font-semibold">
              Openings for International Family <br /> Medicine Specialist
            </h1>
            <JobList />
          </div>
        </div>
        <TestimonialsSection />
        <div className='lg:py-36'><img src={banner} alt="" /></div>
        <Faq />
        <Awards/>
        <ThreeGridSection/>
      </div>

    </div>
  );
}
