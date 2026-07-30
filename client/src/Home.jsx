import React from 'react';
import { Link } from 'react-router-dom';
import Image from "./assets/image.png"
import { FaFire, FaLock, FaLink, FaDesktop } from "react-icons/fa";

export default function Header() {
  return (
    <div className="relative w-full min-h-screen bg-[#08080e] overflow-hidden">
      
{/* effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[60%] right-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-center p-5 max-w-7xl mx-auto px-8">
            
            <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M12 2L2 22H22L12 2Z" fill="url(#grad1)" fillOpacity="0.5" />
                        <path d="M12 6L18 18H6L12 6Z" fill="url(#grad2)" />
                        
                        <defs>
                            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 tracking-wide">
                    KAIROS
                </h1>
            </div>

            <div>
                <nav className="space-x-6 me-12 mt-2 flex items-center">
                    <Link className="font-bold text-white text-lg hover:text-purple-400 transition-colors cursor-pointer">About Us</Link>
                    <Link className="font-bold text-white text-lg hover:text-purple-400 transition-colors cursor-pointer">Solution</Link>
                    <Link className="font-bold text-white text-lg hover:text-purple-400 transition-colors cursor-pointer">Product</Link>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-2 px-8 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-300">
                        Login
                    </button>
                </nav>
            </div>
        </div>
      </div>

      <div className='relative z-10 w-full flex justify-between items-center p-5 max-w-7xl mx-auto px-8'>
        <div className='w-1/2 mt-20'>
            <h1 className='text-5xl font-bold text-white'>Unlock the Future with AI-Powered Face Recognation</h1>
            <p className='text-white text-lg mt-4 font-light'>Seamless, secure, and lightning-fast facial recognation technology for authentication, security, and access control.</p>

            <div className='flex space-x-12 mt-12'>
                <Link className='text-white bg-gradient-to-r flex justify-center items-center from-purple-600 shadow-xl to-pink-600 text-white shadow-white  font-bold py-2 px-8 rounded-full hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-300' to='/prediction'>Get Started</Link>
                <button className='text-white bg-gradient-to-r bg-gray-500 shadow-xl shadow-white font-bold py-4 px-8 rounded-full  hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-300'>Book Demo</button>
            </div>
        </div>

          <div className='relative top-20 left-20'>
              <img src={Image} className='w-120 h-100 rounded-2xl  hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-300' />
              <div className='absolute bottom-6 left-116 text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl min-w-[180px] hover:scale-105 transition-all duration-300'>
                <h1 className='text-pink-400 font-bold'>Marie Chanisse</h1>
                <p className='font-light'>ID 123459</p>
                <p>KN 88 Nyarugenge</p>
                <p>Kigali, Rwanda</p>
              </div>
          </div>
        <div>
        </div>
      </div>

      <div className='relative z-10 w-full items-center p-5 max-w-7xl mx-auto px-8'>
         <h1 className='text-5xl font-bold text-white mt-30 text-center'>Why Choose Us for Your Face Recognation Technology ?</h1>
         <div className='flex space-x-12 mt-12 bg-white/10 backdrop-blur-lg p-10 rounded-md'>
            <div className='bg-white/10  h-60 rounded-lg p-2 backdrop-blur-md hover:scale-105 transition duration-300'>
                <FaFire className='text-blue-400 font-bold text-5xl mt-2'/>
                <h1 className='text-white mt-3 text-xl font-bold'>Hight Accuracy & Speed</h1>
                <p className='mt-3 text-white'>Our AI-driven algorithm ensures fast and precise facial recognation in real-time.</p>
            </div>
            
            <div className='bg-white/10  h-60 rounded-lg p-2 backdrop-blur-md hover:scale-105 transition duration-300'>
                <FaLock className='text-blue-400 font-bold text-5xl'/>
                <h1 className='text-white mt-3 text-xl font-bold'>Hight Accuracy & Speed</h1>
                <p className='mt-3 text-white'>Our AI-driven algorithm ensures fast and precise facial recognation in real-time.</p>
            </div>
            
            <div className='bg-white/10  h-60 rounded-lg p-2 backdrop-blur-md hover:scale-105 transition duration-300'>
                <FaLink className='text-blue-400 font-bold text-5xl'/>
                <h1 className='text-white mt-3 text-xl font-bold'>Hight Accuracy & Speed</h1>
                <p className='mt-3 text-white'>Our AI-driven algorithm ensures fast and precise facial recognation in real-time.</p>
            </div>
            
            <div className='bg-white/10 h-60 rounded-lg p-2 backdrop-blur-md hover:scale-105 transition duration-300'>
                <FaDesktop className='text-blue-400 font-bold text-5xl'/>
                <h1 className='text-white mt-3 text-xl font-bold'>Hight Accuracy & Speed</h1>
                <p className='mt-3 text-white'>Our AI-driven algorithm ensures fast and precise facial recognation in real-time.</p>
            </div>
         </div>
      </div>
    </div>
  );
}