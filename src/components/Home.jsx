import React from 'react'
import { BODY_IMG } from '../utils/constants'

const Home = () => {
  return (
    <div className='max-w-[900px] mx-auto flex items-center x justify-between'>
      <div className='mt-24'>
        <h1 className='font-poppins text-5xl font-medium'>Make Your Party With</h1>
        <h1 className='font-poppins text-5xl font-medium'><span className='text-lime-500'>Delicious</span> Dishes</h1>
        <p className='max-w-[27rem] text-slate-600 mt-9 font-poppins leading-6 text-xs'>Introducing our food order app! Enjoy a variety of flavors delivered straight to you with a simple tap. From sushi to pizza, we've got you covered. No more waiting in lines – download now for a seamless dining experience!</p>
      </div>
      <div className='pt-20'>
        <img src={BODY_IMG} className='w-80' alt="" />
      </div>
    </div>
  )
}

export default Home

// https://dribbble.com/shots/17229413-Restaurant-Landing-Page/attachments/12333646?mode=media