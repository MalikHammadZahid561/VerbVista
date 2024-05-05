import React from 'react'
import home from "/Assets/home1.avif"
import what from "/Assets/whatsapp.png"
import tele from "/Assets/telephone-call.png"
import insta from "/Assets/instagram.png"
import Feedback from "../Components/Feedback/Feedback"

function Contact() {
  return (
    <div>
        <div  className="flex justify-center items-center px-[50px]">
        <div className="flex flex-col p-14 w-1/2">
          <div>
            <h2 className="text-xl text-orange-300 font-bold"> Our Contact</h2>
            <h2 className='text-2xl font-bold'> Easy to Contact Us</h2>
            <p>We are available 24/7 here to help you.These are our contacts</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className='border-r-2 bg-lime-200 p-2'>
              <div className="flex items-center gap-2">
                <img src={tele} width={30}/>
                <h3 className="text-lg font-bold">Call<br/><span className='text-sm'>+92 307 8963656</span></h3>
              </div>
              <button className='bg-lime-100 w-full mt-2 px-4 py-2 rounded'>Call</button>
            </div>
            <div className=' shadow-lg p-2'>
              <div className="flex items-center gap-2">
                <img src={what} width={30}/>
                <h3 className="text-lg font-bold">Call<br/><span className='text-sm'>+92 307 8963656</span></h3>
              </div>
              <button className='bg-lime-100 w-full mt-2 px-4 py-2 rounded'>Call</button>
            </div>
            <div className='border-r-2 bg-lime-200 p-2'>
              <div className="flex items-center gap-2">
                <img src={tele} width={30}/>
                <h3 className="text-lg font-bold">Call<br/><span className='text-sm'>+92 307 8963656</span></h3>
              </div>
              <button className='bg-lime-100 w-full mt-2 px-4 py-2 rounded'>Call</button>
            </div>
            <div className= ' shadow-lg p-2'>
              <div className="flex items-center gap-2">
                <img src={insta} width={30}/>
                <h3 className="text-lg font-bold">Call<br/><span className='text-sm'>+92 307 8963656</span></h3>
              </div>
              <button className='bg-lime-100 w-full mt-2 px-4 py-2 rounded'>Call</button>
            </div>
          </div>
        </div>

        <div className="w-2/5 flex justify-end mb-6 rounded-full mt-10">
          <img className='rounded-full' width={400} src={home}/>
        </div>

</div>
<Feedback/>
    </div>
  )
}

export default Contact