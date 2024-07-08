import React from 'react'
import pic from "../../assets/moto3.png"
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className='mt-[150px] bg-white sh h-auto relative flex flex-col  pb-1'>
        <h1 className='text-center mt-40 lg:mt-32 font-bold text-blue-600 text-[25px] md:text-[50px] lg:text-[100px]'>CYCLESWAP.</h1>
        <img src={pic} alt="pic" className='w-[250px] md:w-[300px] absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[30%]' />
        <div className='grid grid-cols-4 gap-5 h-10 w-[95%] lg:w-[60%] self-center mt-32'>
          <div className='sh flex gap-3 justify-center items-center text-blue-700 font-bold rounded-md transition-all duration-300 hover:bg-blue-700 hover:text-white text-sm'><LuFacebook size={20}/> Facebook</div>
          <div className='sh flex gap-3 justify-center items-center text-blue-700 font-bold rounded-md transition-all duration-300 hover:bg-blue-700 hover:text-white text-sm'><FaInstagram size={20}/> Instagram</div>
          <div className='sh flex gap-3 justify-center items-center text-blue-700 font-bold rounded-md transition-all duration-300 hover:bg-blue-700 hover:text-white text-sm'><FaTiktok size={20}/> TikTok</div>
          <div className='sh flex gap-3 justify-center items-center text-blue-700 font-bold rounded-md transition-all duration-300 hover:bg-blue-700 hover:text-white text-sm'><FaXTwitter size={20}/> Twiter</div>
        </div>
        <p className='text-sm mt-10 text-center font-bold'>CopyRight@ 2024 All Right are reserved : Developed By <span className='text-blue-700 font-bold text-[18px]'>Mehdi</span></p>
      </footer>
    </>
  )
}

export default Footer