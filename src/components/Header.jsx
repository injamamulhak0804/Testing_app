import React, { useEffect, useState } from 'react'
import { HEADER_LOGO } from '../utils/constants'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { supabase } from '../supabaseClient';

const Header = () => {

  const userName = useSelector((store)=> store?.user?.name);


  return (
    
     <>
    <div  className='flex justify-between items-center shadow-sm overflow-hidden h-24 px-10'>
      <div>
          <Link to="/"><img src={HEADER_LOGO} className='w-14 rounded-full cursor-pointer '/></Link>
      </div>

      <div>
          <ul className='flex list-none text-sm font-medium font-poppins gap-x-10 cursor-pointer'>
            <Link className='no-underline' to='/'><li className='hover:text-lime-500'>Home</li></Link>
            <Link className='no-underline' to='/about'><li className='hover:text-lime-500'>About</li></Link>
            <Link className='no-underline' to='/blog'><li className='hover:text-lime-500'>Blog</li></Link>
            <Link className='no-underline' to='/contact'><li className='hover:text-lime-500'>Contact</li></Link>
            <Link className='no-underline' to='/card'><li className='hover:text-lime-500'><FiShoppingCart className='text-2xl'/></li></Link>
          </ul>
      </div>
      <div>
        {
          userName && (<p className='font-poppins duration-300'>Welcome {userName} 👋</p>)
        }
      </div>
      {
        !userName && (
          <div>
          <Link to='/signIn'>
          <button className='cursor-pointer px-7 py-3 text-xs hover:text-white hover:bg-green-500 text-lime-500 rounded-lg font-semibold  border border-black'>SIGN UP</button>
          </Link>
      </div>
        )
      }
    </div>
     </>
  )
    }

export default Header