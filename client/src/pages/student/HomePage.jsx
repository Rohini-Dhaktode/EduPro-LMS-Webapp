import React from 'react'
import HeroComp from '../../components/student/HeroComp'
import CompaniesComp from '../../components/student/CompaniesComp'
import CoursesSectionComp from '../../components/student/CoursesSectionComp'

const HomePage = () => {
  return (
   <div className='flex flex-col items-center space-y-7 text-center'>
    <HeroComp/>
    <CompaniesComp/>
    <CoursesSectionComp/>
   </div>
  )
}

export default HomePage