import React from 'react'
import Image from 'next/image'
import { FaPinterest,FaFacebookF,FaTwitter,   } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { VscThreeBars } from "react-icons/vsc";
import Link from 'next/link';
export default function header() {
  return (
    <div>
      <div className='lg:flex lg:flex-wrap justify-between p-5'>
        <div className='flex flex-wrap gap-x-5'>
        <img src="/images/logo1.png" className='w-24'  alt="" />
         <div className='lg:visible invisible flex flex-wrap items-center gap-x-3  text-2xl ' >
        <FaPinterest className=' fill-pink-600' />
    <FaFacebookF className=' fill-blue-600' />
    <FaTwitter className='fill-blue-400' />
        </div>
        
        </div>
        <div className='lg:hidden block -mt-8 float-right'>
        <VscThreeBars  className='text-2xl'/>
        </div>
        <div>
            <ul className='lg:flex lg:flex-wrap gap-x-9 space-y-3 lg:space-y-0 mt-3.5'>
                <li><Link href="./" className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Home</Link> </li>
                <li><Link href="./about" className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" >About</Link> </li>
                <li><a href="./service" className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Service</a> </li>
                <li><a href="./project" className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Project</a> </li>
                <li><a href="" className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">News</a> </li> 
            </ul>
        </div>
        <div >
        <div className='flex flex-wrap gap-x-5 mt-2  border-l-2 border-white px-1'>
       
       <IoMdCall  className='text-2xl mt-1 text-black'/>
      <CiShoppingCart className='text-2xl mt-1 text-black' />
        <div >
          <h1 className='text-sm'>Call Anytime</h1>
            <p>+01616821106</p>
        </div>
        </div>
        </div>
      </div>  
    </div>
  )
}
