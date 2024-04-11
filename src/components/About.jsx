import React from 'react'
import { BANNER, CALENDER, EARTH, HOME } from '../utils/constants';

const About = () => {
  return (
    <>
    <div className="bg-slate-50 py-10 w-full">
    <div className='font-poppins' >
        <h1 className="text-3xl text-center font-semibold">Why should you partner with Good Food?</h1>
        <p className="text-lg text-center max-w-[45rem] py-10 text-slate-600 mx-auto">Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
     </div>
     <div className="flex justify-center gap-x-5">

        <div className="flex p-5 gap-x-5 items-center rounded-lg bg-white shadow">
            <div>
                <img src={EARTH} alt="" />
            </div>
            <div>
                <p className="text-2xl text-blue-300">1000+ cities</p>
                <p>in India</p>
            </div>
        </div>


        <div className="flex p-5 gap-x-5 items-center rounded-lg bg-white shadow">
            <div>
                <img src={HOME} alt="" />
            </div>
            <div>
                <p className="text-2xl text-blue-300">1000+ cities</p>
                <p>in India</p>
            </div>
        </div>


        <div className="flex p-5 gap-x-5 items-centern rounded-lg bg-white shadow">
            <div>
                <img src={CALENDER} alt="" />
            </div>
            <div>
                <p className="text-2xl text-blue-300">1000+ cities</p>
                <p>in India</p>
            </div>
        </div>
     </div>
</div>
<div className="relative">
    <img src={BANNER} className='w-full h-auto' alt="" />
    <h1 className="absolute text-2xl top-[50%] left-[35%] font-poppins transform -translate-x-1/2 -translate-y-1/2">THANK'S FOR VISITING OUR PAGE</h1>
</div> 
{/* <div> */}
    {/* Adding How It Works  */}
    {/* <div></div>
    <div></div>
    <div></div>
</div> */}
</>
  )
}

export default About