import React from 'react';
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.png";

export default function HowItWorks() {
  return (
    <div className="relative w-full min-h-screen bg-[#08080e] overflow-hidden">
      
{/* effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[60%] right-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-center p-5 max-w-7xl mx-auto px-8">
             <div className='mt-40'>
                <img src={Image1} alt="My Image" className='h-130 w-90 rounded-2xl hover:scale-105 transition duration-200'/>
                <img src={Image2} alt="My Image" className='h-70 w-60 rounded-2xl absolute top-20 left-75 hover:scale-105 transition duration-200' />
             </div>

             <div className=''>
                 <h1 className='text-5xl font-bold text-white'>How It Works</h1>
                 <div className='bg-white/10 backdrop-blur-md flex'>
                   <div className='bg-white w-12 h-10  rounded-lg'>
                       <h1 className='text-black'>1</h1>
                   </div>
                   <div>
                    <p>Scan Your face</p>
                    <p>Capture your facial data using your device camera.</p>
                   </div>
                 </div>
             </div>
        </div>
      </div>
   </div>
  );
}