import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../../assets/assets'
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'


const NavbarComp = () => {
  const {navigate, isEducator} = useContext(AppContext)
  const isCourseListpage = location.pathname.includes('/course-list')

  const {openSignIn} = useClerk()
  const {user} = useUser()

 
  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 
    border-b border-gray-500 py-4 ${isCourseListpage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <img src={assets.edupro_logo} alt="Logo" onClick={() => navigate('/')} className='w-40 lg:w-52 cursor-pointer'/>
      {/* Desktop Screens */}
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
         <div className='flex items-center gap-5'>
          {/* Hide buttons based on user logged in status */}
          {
            user && <>
            <button onClick={() => {navigate('/educator')}}>{isEducator ? 'Educator dashbord' : 'Become Educator'}</button>
           <Link to='/my-enrollments'>My Enrollments</Link>
            </>
          }

         </div>

         {/* Display useButton from clerk otherwise create account btn */}
         {user ? <UserButton/> : 
         <button className='bg-blue-600 text-white px-5 py-2 rounded-full'
          onClick={() => openSignIn()}>
          Create Account
         </button>}
      </div>

       {/* Mobile Screens */}
      <div className='md:hidden flex items-center gap-2 
      sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
           {
            user && <>
            <button onClick={() => {navigate('/educator')}}>{isEducator ? 'Educator dashbord' : 'Become Educator'}</button>
           <Link to='/my-enrollments'>My Enrollments</Link>
            </>
          }
         </div>
         {
          user ? <UserButton/> :  <button onClick={() => openSignIn()}><img src={assets.user_icon} alt=""/></button>
         }
        

      </div>
    </div>
  )
}

export default NavbarComp