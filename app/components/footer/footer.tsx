import React from 'react'
import { FaPinterest,FaFacebookF,FaTwitter,   } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
export default function footer() {
  return (
    <div className='container mx-auto'>
        <div className='md:flex md:flex-wrap md:justify-around p-4'>
            <div className='md:w-1/4'>
                <img src="./images/logo.png" className='w-20 m-auto' alt="" />
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repudiandae repellat, dicta maiores consectetur numquam?</p>
                <div className='flex flex-wrap text-2xl mt-2 gap-x-2 justify-center md:justify-normal'>
                <FaPinterest className='fill-pink-600' />
                <FaFacebookF className='fill-blue-600' />
                <FaTwitter className='fill-blue-400' />
                </div>
            </div>
            <div className='w-1/4 mt-9 md:mt-0'>
                <h1 className='border-b-2 border-white w-14' >Explore</h1>
                <ul className='flex flex-col gap-y-3 mt-3' >
                    <li>About</li>
                    <li>Services</li>
                    <li>Project</li>
                    <li>Farmers</li>
                    <li>Latest News</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='md:w-1/4 mt-9 md:mt-0'>
                <h1 className='  flex flex-col border-b-2 w-12 '>News</h1>
                <div className='mt-3 flex flex-wrap gap-y-3'>
                <div className='w-3/4'>
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, accusantium.</h1>
                    <p>July 5,2002</p>
                </div>
                <div className='w-3/4'>
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, accusantium.</h1>
                    <p>July 4,2001</p>
                </div>
                </div>
               
                
            </div>
            <div className='md:w-1/4 mt-9 md:mt-0'>
                <h1 className='border-b-2 border-white w-16' >Contact</h1>
                <div className='mt-3 space-y-3'>
                <div className='flex flex-wrap md:items-center flex-row gap-x-1'>
                <IoIosCall />
                <h1>017172723121</h1>
                </div>
               <div className='flex flex-wrap md:items-center flex-row gap-x-1 '> {/* Responsive class */}
            <MdMessage /> {/* Moved icon out of the <p> tag */}
            <p>Lorem ipsum dolo</p>
        </div>
        <div className='flex flex-wrap md:items-center flex-row gap-x-1'> {/* Responsive class */}
            <FaLocationDot /> {/* Moved icon out of the <p> tag */}
            <p>Lorem ipsum dolor.</p>
        </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}
