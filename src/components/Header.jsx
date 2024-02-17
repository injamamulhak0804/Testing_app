import React from 'react'
import { HEADER_LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div  className='flex justify-between items-center shadow-lg overflow-hidden h-24 px-10'>
      <div>
          <img src={HEADER_LOGO} className='w-28' alt="" />
      </div>

      <div>
          <ul className='flex gap-x-10 cursor-pointer'>
            <li className='hover:text-lime-500'>Home</li>
            <li className='hover:text-lime-500'>About</li>
            <li className='hover:text-lime-500'>Blog</li>
            <li className='hover:text-lime-500'>Search</li>
            <li className='hover:text-lime-500'>Contact</li>
          </ul>
      </div>

      <div>
          <button className='px-10 py-3 m-2 text-sm bg-green-500 rounded-lg font-semibold text-white'>SIGN IN</button>
          <button className='px-10 py-3 text-sm text-lime-500 rounded-lg font-semibold  border border-black'>SIGN UP</button>
      </div>
    </div>
  )
}

export default Header