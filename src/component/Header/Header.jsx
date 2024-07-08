import React from 'react'
import { IoTimerSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
const Header = () => {
    let Active = {
        color: "rgba(0, 100, 251, 0.753)"
    };
  return (
    <>
    <header className='md:h-20 h-28 bg-transparent sh  flex justify-center sm:justify-evenly items-center gap-3 sm:gap-20 flex-col sm:flex-row'>
        <Link to="">
            <div className='flex items-center flex-col md:flex-row'>
                <img src={logo} alt="logo" className='w-24 md:w-32'/>
                <h1 className='font-bold text-[20px] md:text-[25px] text-sh'>CycleSwap</h1>
            </div>
        </Link>
       <ul className='flex items-center gap-10 font-bold'>
            <NavLink to="" style={({isActive})=> isActive ? Active: null}>
                <li className='transition-colors duration-300 hover:text-blue-500 cursor-pointer'>Accueil</li>
            </NavLink>
            <NavLink to="/Categorie" style={({isActive})=> isActive ? Active: null}>
                 <li className='transition-colors duration-300 hover:text-blue-500 cursor-pointer'>Catégorie</li>
            </NavLink>
            <NavLink to="/Contact" style={({isActive})=> isActive ? Active: null}>
                <li className='transition-colors duration-300 hover:text-blue-500 cursor-pointer'>Contact</li>
            </NavLink>
       </ul>
    </header>
    </>
  )
}

export default Header