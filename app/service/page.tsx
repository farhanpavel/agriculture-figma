import React from 'react'
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
export default function service() {
  return (
    <div>
      <div className='bg-white text-black shadow-xl'>
        <Header/>
      </div>
      <div className="font-manrope font-semibold flex text-white justify-center flex-col items-center bg-[url('/images/cover.png')] h-[40vh] bg-no-repeat bg-cover">
    <p className='text-md'>Home  /  Service</p>
    <h1 className='text-4xl'>Service</h1>
      </div>
      <div className='container mx-auto'>
      <div className='md:flex md:flex-wrap md:justify-evenly p-10'>

      <div className='md:w-1/4  mb-4 md:mb-0  '>
            <div className='bg-[#F8F7F0]  h-1/4 p-4 rounded-lg'>
            <h1 className='font-manrope text-2xl font-bold'>Categories</h1>
            <ul className='mt-2 space-y-2'>
                <li>Agricultural Product</li>
                <li>Organic Products</li>
                <li>Fresh Vegetables</li>
                <li>Dairy Products</li>
                <li>Harvest</li>
            </ul>
            </div>
            <div className='mt-2'>
                <img src="./images/phone.png" alt="" />
            </div>
        </div>
        <div className='md:w-1/2 '>
            <img src="./images/agri.png" className='w-full' alt="" />
            <h1 className='font-manrope text-2xl font-bold text-center '>Agriculture Products</h1>
            <p className='mt-2 text-gray-500'>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia
            quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis
            enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since
            the 1500s.
            It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and
            type setting Ipsum take a look at our round. When an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting.</p>
            <div className='flex flex-wrap justify-around mt-4'>
                <div className='w-1/3'>
                    <img src="./images/benefit1.png" alt="" />
                    <h1 className='text-center font-manrope text-xl font-bold mb-2'>Our Benefits</h1>
                    <p className='font-manrope text-gray-500'>It has survived not only five centuries em simply
                    dummy text. Duis aute irure dolor in eprehenderit
                    in voluptate velit esse cillum.</p>
                </div>
                <div className='w-1/3'>
                <img src="./images/benefit2.png" alt="" />
                    <h1 className='text-center font-manrope text-cl font-bold mb-2'>Category</h1>
                    <ul className='text-gray-500 font-manrope list-disc'>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor  </li>
                        <li>Lorem, ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src="./images/footer-img.png" alt="" />
            </div>
        </div>
      </div>
      </div>
      <div className='bg-black text-white'>
            <Footer/>
        </div>
    </div>
  )
}
