import React from 'react'
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function page() {
  return (
    <div >
      <div>
      <div className="bg-[url('/images/Hero.png')] bg-no-repeat bg-cover h-[150vh]    md:h-screen">
        <div className='text-white border-b-[1px] border-white'>
        <Header />
        </div>
        <div className=' grid place-content-center items-center -mt-36 md:-mt-16 h-full'>
            <div className='text-4xl'>
            <h1 className='text-white text-center font-manrope font-semibold'>Natural Products<br/>
            For Lovers of <span className="text-yellow-400  bg-[url('/images/underline.png')]" >Healthy</span><br/>
            Organic Food 
            </h1>
            </div>
            <div className='text-md m-auto mt-5 '>
            <button className='py-2 px-2 text-white rounded-md bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300'>Discover Here</button>
      
            </div>
           
        </div>
        </div>
      </div>
        
      <div className=' container mx-auto'>
        <div  className=' relative -top-16'>
          <div className='flex flex-wrap justify-around'>
          <div className=' w-1/4 h-1/4 p-4 text-center bg-white rounded-sm shadow-xl'>
              <h5 className='text-center text-yellow-400  font-semibold font-manrope'>Feature 1</h5>
              <p>We are Using<br/> 
                New Technlogy</p>
              <img src="./images/farmer1.png" className='w-1/2 m-auto'   alt="" />
      </div>
          <div className='w-1/4 h-1/4 p-4 text-center shadow-xl bg-white rounded-sm'>
          <h5 className='text-yellow-400 font-semibold text-center font-manrope'>Feature 2</h5>
              <p>We are Using<br/>
                 New Technlogy</p>
              <img src="./images/farmer2.png" className='w-1/2 m-auto' alt="" />
      
          </div>
          <div className='w-1/4 h-1/4 p-4 text-center shadow-xl rounded-sm bg-white'>
          <h5 className='text-yellow-400 font-semibold text-center font-manrope'>Feature 3</h5>
              <p>We are Using <br/>
                New Technlogy</p>
              <img src="./images/farmer3.png" className='w-1/2 m-auto' alt="" />

          </div>
          </div>
      
        </div>
        <div className='md:flex md:flex-wrap md:justify-around mt-16'>
        <div className='relative sm:w-1/3 w-1/2 m-auto lg:m-0'>
  <img src="./images/Circle logo.png" alt="" />
      <div className='absolute top-[60%] md:top-[64%] lg:top-[55%]'>
    <img src="./images/mini-circle.png" className='w-1/2' alt="" />
  </div>
</div>

          <div className='lg:w-1/3 mt-7 lg:mt-0'>
            <h1 className='text-3xl font-manrope font-semibold'>Agriculture & Organic<br/>
            Product Farm</h1>
            <h5 className='mt-4 text-md font-bold text-green-600'>Agrios is the largest global organic farm.</h5>
            <p className='mt-4'>There are many variations of passages of lorem ipsum available but the
            majority have suffered alteration in some form by injected humor or
            random word which don’t look even.</p>
            <div className='flex flex-wrap justify-around mt-4'>
              <div className='w-1/3'>
                <img src="./images/Details1.png" alt="" />
              </div>
              <div className='w-1/3'>
                <img src="./images/Details2.png" alt="" />
              </div>
            </div>
            <ul className='list-disc'>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            </ul>
            <div className='text-center sm:text-start'>
            <button className=' py-2 mt-4 px-2 text-white rounded-md bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300'>Discover more</button>
         
            </div>
          </div>
        </div>
      </div>
       <div className='mt-14'>
        <div className='bg-[#F8F7F0] text-center h-[40vh] flex items-center justify-center '>
          <h1 className='text-2xl font-bold font-manrope'>What We Offer</h1>
        </div>
       
       </div>
        <div className='container mx-auto '>
          <div className='flex flex-wrap justify-around -mt-16'>
            <div className='w-1/5'>
              <img src="./images/card1.png" alt="" />
            </div>
            <div className='w-1/5'>
            <img src="./images/card2.png" alt="" />
            </div>
            <div className='w-1/5'>
            <img src="./images/card3.png" alt="" />
            </div>
            <div className='w-1/5'>
            <img src="./images/card4.png" alt="" />
            </div>
          </div>
          
        </div>
    <div className="mt-24">
    <img src="./images/frame2.png" className=" w-1/2 m-auto " alt="" />
    </div>
    <div className='container mx-auto mt-16'>
      <div className='sm:flex sm:flex-wrap sm:justify-around'>
        <div className='sm:w-1/3'>
          <h1 className='text-2xl font-semibold font-manrope'>Recently Completed<br/>
      Projects</h1>
        </div>
        <div className='sm:w-1/3'>
<p className='text-md font-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem quidem porro eaque at doloremque fugit aliquam? Reiciendis, earum soluta?</p>
        </div>
      </div>
    </div>
      <div className='mt-5'>
        <img src="./images/frame3.png" alt="" />
      </div>
      <div>
        <div className='text-center text-2xl font-bold font-manrope mt-6'>
          <h1>Meet Our Farmers</h1>
        </div>
          <div className='container mx-auto mt-10'>
            <div className='flex flex-wrap justify-around'>
              <div className='w-1/3'>
                <img src="./images/client1.png" alt="" />
              </div>
              <div className='w-1/3'>
                <img src="./images/client2.png" alt="" />
              </div>
              <div className='w-1/3'>
                <img src="./images/client3.png" alt="" />
              </div>
             
            </div>
            <div className='flex flex-wrap justify-around gap-x-3'>
              <div className='w-1/6'>
              <img src="./images/smallcard1.png" alt="" />
              </div>
              <div className='w-1/6'>
              <img src="./images/smallcard2.png" alt="" />
              </div>
              <div className='w-1/6'>
              <img src="./images/smallcard3.png" alt="" />
              </div>
              <div className='w-1/6'>
              <img src="./images/smallcard4.png" alt="" />
              </div>
              <div className='w-1/6'>
              <img src="./images/smallcard5.png" alt="" />
              </div>
            </div>
          </div>
          <div className='mt-5 '>
            <img src="./images/section.png" alt="" />
          </div>
      </div>
      <div className='container mx-auto mt-10'>
      <div className='flex flex-wrap justify-center'>
      <div className="aspect-w-16 aspect-h-9  w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.117958285!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1709834053390!5m2!1sen!2sbd"
        
           
          className='border-0 w-full h-full '
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        <div className="bg-[#F8F7F0]  w-full">
          <h1 className='text-3xl font-bold font-manrope text-center mt-14'>Write a Message</h1>
          <div className='space-x-3 mx-6 p-4 mt-5 '>
            <div className='flex flex-wrap gap-x-8 gap-y-3'>
              <div>
              <input type="text" placeholder='Name' className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '/>
        
              </div>
              <div>
              <input type="email" placeholder='Email' className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '/>
       
              </div>
            </div>
             </div>
          <div className='mx-10 mb-2'>
            <textarea name="" id="" className='resize-none w-full h-[30vh] p-3 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Write A Message'></textarea>
          </div>
          <div className='flex justify-center'>
          <button className='py-2 px-9 mb-4  text-white rounded-md bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300'>Send</button>
      
          </div>
        </div>
    
       </div>
      </div>
      <div className='mt-14 bg-[#24231D] text-white p-7'>
      <Footer/>
      </div>
  
    </div>


)
}
