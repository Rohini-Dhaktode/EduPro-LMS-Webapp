import React from 'react'
import { assets } from '../../assets/assets'

const FooterComp = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-ledt w-full mt-10'>
        <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10
        border-b border-white/30'>
         {/*  Column 1 */}
         <div className='flex flex-col md:items-start items-center w-full'>
            <img src={assets.logo_dark} alt="logo"/>
         </div>
         <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem Ipsum is not simply random text. It has roots in a piece of classical 
            Latin literature from 45 BC, making it over 2000 years old.</p>

         {/*  Column 2 */}
         <div className='flex flex-col md:items-start items-center w-full'>
            <h2 className='font-semibold text-white mb-5'>Company</h2>
            <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy policy</a></li>
            </ul>
         </div>

         {/*  Column 3 */}
         <div className='hidden md:flex flex-col items-start w-full'>
            <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
            <p className='text-sm text-white/80'>The latest news , articles , and resources , sent to your inbox weekly.</p>
         </div>

        </div>

        <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2026 @xyz. All Right Reserved.</p>
    </footer>
  )
}

export default FooterComp