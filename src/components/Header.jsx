import React from 'react'
import { HEADER_LOGO } from '../utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div  className='flex justify-between items-center shadow-sm overflow-hidden h-24 px-10'>
      <div>
          <img src={HEADER_LOGO} className='w-28' alt="" />
      </div>

      <div>
          <ul className='flex list-none text-sm font-medium font-poppins gap-x-10 cursor-pointer'>
            <Link className='no-underline' to='/'><li className='hover:text-lime-500'>Home</li></Link>
            <Link className='no-underline' to='/about'><li className='hover:text-lime-500'>About</li></Link>
            <Link className='no-underline' to='/blog'><li className='hover:text-lime-500'>Blog</li></Link>
            <Link className='no-underline' to='/contact'><li className='hover:text-lime-500'>Contact</li></Link>
          </ul>
      </div>

      <div>
          <button className='px-7 py-3 m-2 text-xs bg-green-500 rounded-lg font-semibold text-white'>SIGN IN</button>
          <button className='px-7 py-3 text-xs text-lime-500 rounded-lg font-semibold  border border-black'>SIGN UP</button>
      </div>
    </div>
  )
}

export default Header