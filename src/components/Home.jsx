import React, { useEffect, useState } from 'react'
import { BODY_IMG, CAROUSEL_IMG } from '../utils/constants'

const Home = () => {

  const [carousel, setCarousel] = useState(null);
  const [resturantCard, setResturantCard] = useState(null);

  useEffect(()=>{
    const fetchData = async () =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const carous = json.data.cards[0].card?.card?.gridElements?.infoWithStyle?.info
      setCarousel(carous)
    }
    fetchData()
  },[])


  return (
    <>

    {/* Hero Section */}

    <div className='max-w-[900px] mx-auto flex items-center x justify-between mb-24'>
      <div className='mt-24'>
        <h1 className='font-poppins text-5xl font-medium'>Make Your Party With</h1>
        <h1 className='font-poppins text-5xl font-medium'><span className='text-lime-500'>Delicious</span> Dishes</h1>
        <p className='max-w-[27rem] text-slate-600 mt-9 font-poppins leading-6 text-xs'>Introducing our food order app! Enjoy a variety of flavors delivered straight to you with a simple tap. From sushi to pizza, we've got you covered. No more waiting in lines – download now for a seamless dining experience!</p>
      </div>
      <div className='pt-20'>
          <img src={BODY_IMG} className='w-80' alt="" />
      </div>
    </div>

  {/* Secondary Section */}

    <div className='flex overflow-x-auto max-w-[80%] mx-auto gap-x-4'>
      {
        carousel?.map((item)=>(
          <div key={item.id}>
            <img className='max-w-40' src={CAROUSEL_IMG + item.imageId} alt="" />
          </div>
        ))
      }
    </div>


  </>
  )
}

export default Home

// https://dribbble.com/shots/17229413-Restaurant-Landing-Page/attachments/12333646?mode=media