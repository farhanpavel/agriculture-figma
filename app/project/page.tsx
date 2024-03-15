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
    <p className='text-md'>Home  /  Project</p>
    <h1 className='text-4xl'>Project</h1>
      </div>
      <div className='container mx-auto'>
        <div>
          <img className='w-3/4 rounded-sm m-auto mt-5' src="./images/farmer.png" alt="" />
        </div>
        <div className='md:flex md:flex-wrap md:justify-evenly p-5'>
          <div className='md:w-[60%] space-y-6'>
            <div >
              <h1 className='font-bold text-2xl'>Healthy Food</h1>
              <p className='text-sm'>Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p  className='text-sm'>Biophilia is the idea that humans possess an innate tendency to seek connections with nature.
              The term translates</p>
              <p  className='text-sm'>The term translates When an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p  className='text-sm'>Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div>
              <h1 className='font-bold text-2xl'>Challenges</h1>
              <ul  className='text-sm p-2 space-y-1 list-disc'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, deserunt.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, fugit?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, tempora?</li>
              </ul>
            </div>
            <div className='text-md'>
              <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
unchanged.</p>
            </div>
          </div>
          <div className='md:w-1/4 mt-5 md:mt-0 shadow-xl border-t-2 border-yellow-500 h-[50vh] p-9 space-y-4'>
            <div>
            <h1 className='font-bold' >Services</h1>
            <h3>Healthy Food</h3>
            </div>
            <div>
              <h1 className='font-bold'>Farmer</h1>
              <h3>Mike Hardson</h3>
            </div>
            <div>
              <h1 className='font-bold'>Duration</h1>
              <h3>4.5 Month</h3>
            </div>
            <div>
              <h1 className='font-bold'>Location</h1>
              <h5>Budapest,Hungary</h5>
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-2xl font-manrope font-bold text-center mt-5  '>Similar Projects</h1>
          <div className='flex flex-wrap mt-5 gap-y-4 gap-x-5 lg:gap-x-0 justify-around'>
          <div  className=' lg:w-1/2 md:w-1/4 '>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg m-auto" src="./images/1.png"alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>

          </div>
          <div  className='lg:w-1/2 md:w-1/4'>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg m-auto"src="./images/3.png" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>

          </div>
          <div  className=' lg:w-1/2 md:w-1/4'>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg m-auto" src="./images/2.png" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>

          </div>
          <div  className=' lg:w-1/2 md:w-1/4'>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg m-auto" src="./images/4.png" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>

          </div>
          </div>
        </div>
      </div>
      <div className='bg-black text-white mt-5'>
            <Footer/>
        </div>
    </div>
    
  )
}
