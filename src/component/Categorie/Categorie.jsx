import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import cat from "../../assets/back.jpg"
import curren from "../../assets/curren1.png"
import { Data } from '../../context/Data';
const Categorie = () => {
  const {AllProduct,setAllProduct} = useContext(Data)
  const [Filter,setFilter] = useState(AllProduct)
  let [active,setactive] = useState(4)
  const Active = (id)=>{
    setactive(id)
  }
    // a useeffect to do a filter 
  useEffect(()=>{
    if (active === 1) {
      const filt = AllProduct.filter((prod)=>prod.Type === "rolex")
      setFilter(filt)
    }else if(active === 2){
      const filt = AllProduct.filter((prod)=>prod.Type === "phillip")
      setFilter(filt)
    }else if(active === 3){
      const filt = AllProduct.filter((prod)=>prod.Type === "curren")
      setFilter(filt)
    }else{
      setFilter(AllProduct)
    }
  },[active])
  
  return (
  <>
    <section className='mt-5 h-96 flex justify-center items-center relative'>
      <img src={cat} alt="cat" className=' absolute w-full h-full object-cover'/>
      <h1 className='z-10 font-bold text-[40px] sm:text-[60px] lg:text-[80px] text-blue-700'>CATEGORIE</h1>
    </section>
    {/* <section className='mt-20 w-[90%] relative left-1/2 -translate-x-1/2 flex justify-center'>
          <ul className='flex justify-between w-full sm:w-[80%] lg:w-[65%] font-bold text-[20px]'>
            <li className={`relative duration-500 transition-all cursor-pointer ${active === 1 ? "aft text-amber-800" : <></>}`} onClick={()=>Active(1)}>Rolex</li>
            <li className={`relative duration-500 transition-all cursor-pointer ${active === 2 ? "aft text-amber-800" : <></>}`} onClick={()=>Active(2)}>Phillip</li>
            <li className={`relative duration-500 transition-all cursor-pointer ${active === 3 ? "aft text-amber-800" : <></>}`} onClick={()=>Active(3)}>Curren</li>
            <li className={`relative duration-500 transition-all cursor-pointer ${active === 4 ? "aft text-amber-800" : <></>}`} onClick={()=>Active(4)}>All</li>
          </ul>
    </section> */}
    {
      Filter.length !== 0 ?
    
      <section className='mt-20 w-[90%] relative left-1/2 -translate-x-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5'>
        {
        Filter.map((watch)=>{
          return(
            <>
              <nav key={parseInt(watch.Id)} className='h-[400px] w-[300px] sh rounded-md flex flex-col gap-5 pb-2 relative'>
                  <NavLink to={`/ProductDetails/${parseInt(watch.Id)}`} className='h-[300px] flex justify-center items-center' onClick={()=>scrollTo({top:0,behavior : "smooth"})}>
                      <img src={`http://localhost/MY_PROJECTS/watches_project/assets/${watch.Pic}`} alt="pic" className='h-[200px] object-cover duration-500 transition-all hover:scale-110 cursor-pointer'/>
                  </NavLink>
                  <div className='flex gap-3 flex-col items-center'>
                    <h1 className='font-bold text-[18px]'>{watch.Nom}</h1>
                    <p className='font-bold text-[20px] text-blue-700'>{watch.Price} MAD</p>
                  </div>
                <NavLink to={`/ProductDetails/${parseInt(watch.Id)}`} className="self-center">
                  <button className='w-[100px] h-10 text-sm rounded-md sh bg-white text-blue-700 duration-500 transition-all hover:text-white hover:bg-blue-700 flex items-center justify-center gap-3' onClick={()=>scrollTo({top:0,behavior : "smooth"})}><FaCartShopping /> Shop Now</button>
                </NavLink>
              </nav>
            </>
          )
        })
      } 
    
    </section> : <><p className='text-center font-bold text-blue-700 text-[25px] mt-10'>No Watch in this Catégorie Yet !!</p></>
    }
  </>
  )
}

export default Categorie