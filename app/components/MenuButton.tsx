'use client'

import React, {useState} from 'react'
import  MenuIcon  from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function MenuButton() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

  return (
    <section>
    <div className={isOpen ? 'absolute left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#011627]/80 ease-in duration-500' : 'top-0 left-[-150]'}>
         <div className='absolute top-0 left-0'>
            1
            
        </div>
        </div>

    <div onClick={toggleNav} className="flex items-center md:hidden" >
        <div className="">
      <MenuIcon className="w-[35px] h-[35px]" />
    </div>  

   
    </div>
    </section>
 
  )
}

export default MenuButton
