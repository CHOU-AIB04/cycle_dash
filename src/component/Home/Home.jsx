import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import moto1 from "../../assets/moto3.png"
import moto2 from "../../assets/moto2.png"
import moto3 from "../../assets/moto.jfif"
import pic2 from "../../assets/philipe2.jpeg"
import camp1 from "../../assets/camp1.png"
import camp2 from "../../assets/camp2.jfif"
import camp3 from "../../assets/camp3.png"
import camp4 from "../../assets/camp4.jfif"
import { ImPriceTags } from "react-icons/im";
import inhand from "../../assets/inhand.webp"
import onehand from "../../assets/onehand.webp"
import { GoArrowUpRight } from "react-icons/go";
import { useEffect } from 'react';
import { useState } from 'react';
const Home = () => {
  let [slide,setslide] = useState(()=>{
    if (window.innerWidth>=850) {
      return 3
    } else if(window.innerWidth <=550){
      return 1
    }else{
      return 2
    }
  })
  useEffect(()=>{
   addEventListener("resize",()=>{
    if (window.innerWidth>=850) {
      setslide(3)
    } else if(window.innerWidth <=550){
     setslide(1)
    }else{
      setslide(2)
    }
   })
  },[window.innerWidth])
  return (
    <>
    {/* the first section */}

    <section className='w-[90%] mt-20 relative left-1/2 -translate-x-1/2 flex flex-col items-center'>
      <img src={moto1} alt="moto" className='z-10 w-[350px] md:w-[600px] relative bottom-20' />
      <h1 className='text-[70px] md:text-[200px] font-bold absolute top-1/2 -translate-y-1/2 text-blue-600'>Cycle Swap</h1>
    </section>
    {/* the section that contain the companies logo */}
    <section className='mt-20 w-[90%] h-auto mb-10 relative left-1/2 -translate-x-1/2'>
      <div className='w-full h-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='flex items-center justify-center'>
            <img src={camp1} alt="logo" className ="w-[150px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={camp2} alt="logo" className ="w-[150px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={camp3} alt="logo" className ="w-[150px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={camp4} alt="logo" className ="w-[150px] object-cover"/>
          </div>
      </div>
    </section>
    <section className='mt-20 w-[90%] h-auto relative left-1/2 -translate-x-1/2 flex flex-col items-center gap-10'>
      <h1 className=' text-center font-bold text-[30px] text-sh'>MOTO CYLCE HISTOIRE</h1>
      <p className='w-[90%] md:w-[75%]'><span className='font-bold'>CycleSWAP</span>, fondé en 2024, est rapidement devenu un marché en ligne de premier plan pour les passionnés de motocyclettes. Inspiré par la demande croissante pour une plateforme dédiée, CycleSWAP connecte directement les acheteurs et les vendeurs, garantissant des transactions fluides. La plateforme permet aux utilisateurs de publier des annonces de motos avec des descriptions détaillées et des photos, facilitant ainsi des décisions éclairées. En mettant l'accent sur la communauté et la confiance, CycleSWAP intègre des avis utilisateurs et des processus de vérification. Grâce à son interface conviviale et à son système de support solide, CycleSWAP a rapidement gagné en popularité, devenant un nom de confiance dans l'industrie du commerce de motocyclettes. Son engagement envers la transparence et la sécurité a solidifié sa réputation, en faisant une destination incontournable pour les transactions de motos.</p>
    </section>
    {/*  the latest watches section*/}
    <section className='mt-20 w-[90%] h-auto mb-10 relative left-1/2 -translate-x-1/2'>
      <h1 className='text-[20px] sm:text-[40px] lg:text-[60px] font-bold text-center'>DISCOVER THE LATEST MOTOCYCLE.</h1>
      <div className='h-auto grid grid-cols-1 md:grid-cols-3 mt-4 place-items-center gap-5 md:gap-0'>
        <div>
          <img src={moto2} alt="watch" className='w-auto'/>
        </div>
        <div className='self-center flex flex-col items-center gap-3'>
          <ImPriceTags size={40} className="text-blue-900"/>
          <p className='w-[90%] font-bold text-[25px] text-center'>Discover Your New Favorite Our Best Sellers Sale</p>
          <h1 className='font-bold text-[40px] text-blue-900'>50% Off</h1>
          <p className='text-[20px]'>Our All New Arrivals</p>
        </div>
        <div>
          <img src={moto3} alt="watch" />
        </div>
      </div>
    </section>
    {/* the  brand section*/}
    {/* <section className='mt-20 w-[90%] h-auto mb-10 relative left-1/2 -translate-x-1/2 space-y-3'>
      <h1 className='text-[20px] sm:text-[40px] lg:text-[60px] font-bold'>OUR BRAND SELECTION.</h1>
      <div>
          <img src={onehand} alt="pic" />
      </div>
      <div className='h-16 flex items-center justify-between pl-5 pr-5 sh rounded-md transition-all duration-500 hover:text-amber-900 hover:bg-black'>
        <p className='font-bold text-[20px]'>Rolex</p>
        <GoArrowUpRight size={20}/>
      </div>
      <div className='h-16 flex items-center justify-between pl-5 pr-5 sh rounded-md transition-all duration-500 hover:text-amber-900 hover:bg-black'>
        <p className='font-bold text-[20px]'>Phillip</p>
        <GoArrowUpRight size={20}/>
      </div>
      <div className='h-16 flex items-center justify-between pl-5 pr-5 sh rounded-md transition-all duration-500 hover:text-amber-900 hover:bg-black'>
        <p className='font-bold text-[20px]'>Curren</p>
        <GoArrowUpRight size={20}/>
      </div>
    </section> */}
    </>
  )
}

export default Home