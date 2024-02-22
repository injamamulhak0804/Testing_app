import React from 'react'
import { CAROUSEL_IMG, STAR_ICON } from '../utils/constants'

const RestaurantCards = ({restaurant}) => {
    const {avgRatingString, cloudinaryImageId, cuisines, name} = restaurant.info
  return (
    <div className="no-underline hover:scale-95 select-none hover:shadow-md min-w-[150px] max-h-[300px] duration-200 md:w-[250px] md:h-[350px] rounded-lg p-3 flex flex-col gap-y-3">
        <img src={CAROUSEL_IMG + cloudinaryImageId} alt="" className='w-full h-[50%] object-cover rounded-lg' />
        <div className=''>
        <p className='font-poppins font-[600] text-sm'>{name.length >= 20 ? `${name.slice(0,20)}...` : name}</p>
        <p className='font-poppins font-[600] text-sm flex items-start gap-1'>
            <span>
                <img src={STAR_ICON} className='w-5' alt="" />
            </span>{avgRatingString}
        </p>
        <p className='font-poppins text-slate-400 text-sm'>{cuisines.join(', ').length >= 20 ? `${cuisines.slice(0,3)}...` : cuisines.join(", ")}</p>
        </div>
    </div>
  )
}

export default RestaurantCards