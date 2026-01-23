import React from 'react'
import HeroComp from '../../components/student/HeroComp'
import CompaniesComp from '../../components/student/CompaniesComp'
import CoursesSectionComp from '../../components/student/CoursesSectionComp'
import TestimonialSectionComp from '../../components/student/TestimonialSectionComp'
import CallToActionComp from '../../components/student/CallToActionComp'
import FooterComp from '../../components/student/FooterComp'

const HomePage = () => {
  return (
   <div className='flex flex-col items-center space-y-7 text-center'>
    <HeroComp/>
    <CompaniesComp/>
    <CoursesSectionComp/>
    <TestimonialSectionComp/>
    <CallToActionComp/>
    <FooterComp/>
   </div>
  )
}

export default HomePage