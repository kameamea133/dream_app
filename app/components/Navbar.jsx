'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center fixed w-full px-[100px] transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-sm bg-white/5' : ''
      }`}
    >
      <div>
        <Image
          src="/assets/images/Image 2.png"
          width={100}
          height={100}
          alt="logo"
          className="w-[120px] h-[120px]"
        />
      </div>
      <div className="pb-5">
        <RxHamburgerMenu size={30} />
      </div>
    </div>
  );
};

export default Navbar;
