import React from 'react'
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
export default function page() {
  return (
    <div>
      <div className='bg-white text-black shadow-xl'>
        <Header/>
      </div>
      <div className="font-manrope font-semibold flex text-white justify-center flex-col items-center bg-[url('/images/cover.png')] h-[40vh] bg-no-repeat bg-cover">
    <p className='text-md'>Home  /  About</p>
    <h1 className='text-4xl'>About</h1>
      </div>
        <div className='container mx-auto mt-14'>
            <div className='md:flex md:flex-wrap md:justify-evenly '>
                <div className='md:w-1/2'>
                <img src="./images/about1.png" alt="" />
         
                </div>
            
            <div className='mt-5 md:mt-0 md:w-1/3 font-manrope'>
                <p className='font-bold text-yellow-400'>Do you Know it</p>
                <h1 className='text-3xl font-bold mb-4'>The Best Agriculture<br/>
                Market</h1>
                <p className='text-green-600 font-semibold'>There are many variations of passa of lorem available, but
                the majority have suffered alteration.</p>
                <p className=' mt-3'>There are many variations of passages of lorem ipsum available but the
                majority have suffered alteration in some form by injected humor or
                random word which don’t look even.</p>
                <ul className='list-disc list-inside mt-2'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, ducimus?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sunt.</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="bg-[url('/images/about2.png')] h-[46vh] bg-no-repeat bg-cover mt-16 p-4 font-manrope font-semibold">
            <div className='text-center'>
            <p className='text-md text-yellow-400'>Our Testimonials</p>
            <h1 className='text-3xl '>What we Say</h1>
            </div>
            <div className='mt-5 '>
                <img src="./images/client.png" className=' md:w-1/2 m-auto' alt="" />
            </div>
            
        </div>
        <div>
            <div>
                <h1 className='text-3xl font-semibold text-center mt-16 font-manrope'>Meet Our Farmers</h1>
            </div>
            <div className='container mx-auto p-5 mt-4'>
                <div className='flex flex-wrap justify-evenly'>
                    <div className='w-1/4'>
                    <img src="./images/farmer4.png" alt="" />
                    </div>
                    <div className='w-1/4'>
                    <img src="./images/farmer5.png" alt="" />
                   
                    </div>
                    <div className='w-1/4'>
                    <img src="./images/farmer6.png" alt="" />
                
                    </div>
                </div>
            </div>
            <div className='bg-[#F8F7F0] h-[20vh]'>

            </div>
        </div>
        <div className='bg-black text-white'>
            <Footer/>
        </div>
    </div>
  )
}
