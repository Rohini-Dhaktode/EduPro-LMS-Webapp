import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarEdComp from '../../components/educator/NavbarEdComp'
import SidebarEdComp from '../../components/educator/SidebarEdComp'
import FooterEdComp from '../../components/educator/FooterEdComp'

const EducatorPage = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
        <NavbarEdComp/>
        <div className='flex'>
            <SidebarEdComp/>
            <div className='flex-1'>
              {<Outlet/>}
            </div>
        </div>

        <FooterEdComp/>
    </div>
  )
}

export default EducatorPage