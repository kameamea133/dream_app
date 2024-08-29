import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed w-full px-[100px]'>
        <div>
            <Image 
                src='/assets/images/Image 2.png'
                width={100}
                height={100}
                alt='logo'
                className='w-[120px] h-[120px]'
            />
        </div>
        <div className='pb-5'>
        <RxHamburgerMenu size={30}/>
        </div>
    </div>
  )
}

export default Navbar