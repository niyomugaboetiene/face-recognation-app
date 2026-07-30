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
                 <h1 className='text-5xl font-bold text-white mb-4'>How It Works</h1>
                 <div className='bg-white/20 backdrop-blur-md flex rounded-xl p-2'>
                   <div className='bg-white w-14 h-13 mt-5  rounded-lg'>
                       <h1 className='text-black text-2xl text-center mt-3 font-bold'>1</h1>
                   </div>
                   <div>
                    <p className='text-2xl text-white font-bold ms-3 mt-3'>Scan Your face</p>
                    <p className='text-white font-stretch-50% ms-3 mt-3'>Capture your facial data using your device camera.</p>
                   </div>
                 </div>
                 
                 <div className='bg-white/20 backdrop-blur-md flex rounded-xl p-2 mt-7 border-4 border-blue-400 w-140 shadow-2xl shadow-blue-400'>
                   <div className='bg-blue-400 w-14 h-13 mt-5  rounded-lg'>
                       <h1 className='text-black text-2xl text-center mt-3 font-bold'>2</h1>
                   </div>
                   <div>
                    <p className='text-2xl font-bold ms-3 mt-3 text-blue-400'>AI Processing</p>
                    <p className='font-stretch-50% ms-3 mt-3 text-blue-400'>Our smart algorithm maps and verifies your identity.</p>
                   </div>
                 </div>
                 
                 <div className='bg-white/20 backdrop-blur-md flex rounded-xl p-2 mt-7'>
                   <div className='bg-white w-14 h-13 mt-5 rounded-lg'>
                       <h1 className='text-black text-2xl text-center mt-3 font-bold'>3</h1>
                   </div>
                   <div>
                    <p className='text-2xl text-white font-bold ms-3 mt-3'>Instant Access</p>
                    <p className='text-white font-stretch-50% ms-3 mt-3'>Get authenticated securely within second.</p>
                   </div>
                 </div>
             </div>
        </div>
      </div>
   </div>
  );
}