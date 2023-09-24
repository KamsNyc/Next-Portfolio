'use client'

import React, {useState} from 'react'
import  MenuIcon  from '@mui/icons-material/Menu';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Link from 'next/link';


function MenuButton() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

  return (

    // OPEN MENU
    <section>
    <div className={isOpen ? 'absolute left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-gray-800/20 ease-in-out duration-500 rounded-tr rounded-br backdrop-blur-md' : 'top-0 left-[-150px]'}>
         <section className={isOpen ? 'p-10' : 'hidden'}>
            
            <div className=" text-right">
            <CancelPresentationIcon onClick={() => {
                setIsOpen(!isOpen);
            }} className='w-[30px] h-[30px]'/>
            </div>

            <div className=" text-center">
                <h3 className='py-4'>OPEN FOR PROJECTS</h3>
            </div>

            <ul className="flex flex-col text-lg gap-4 ">
              <Link className='p-2 hover:bg-gray-600 rounded-md' href={"/"}>Home</Link>
              <Link className='p-2 hover:bg-gray-600 rounded-md' href={"/about"}>About</Link>
              <Link className='p-2 hover:bg-gray-600 rounded-md' href={"/project"}>Projects</Link>
            </ul>
   
            
        </section>
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
