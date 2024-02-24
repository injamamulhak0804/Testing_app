import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useCardList from '../utils/Hooks/useCardList';
import ShimmerCardList from '../Shimmer/ShimmerCardList';
import { STAR_ICON } from '../utils/constants';
import CardItemList from './CardItemList';

const RestaurantList = () => {
  
  const id = useParams();
  const cardList = useCardList(id);


  if(cardList?.cards ===  undefined) {return <ShimmerCardList />}
  const  {name, cuisines, avgRatingString, city} = cardList?.cards[2]?.card?.card?.info;
  const categories = cardList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=> c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
  
  return (
    <div>
      <div className='max-w-[800px] mx-auto'>
        <h3 className='font-poppins mt-16'>{name}</h3>

       <div className='flex justify-between items-center'>
       <div>
          <h4 className='font-poppins mt-16'>{name}</h4>
          <p className='text-slate-400 font-poppins text-xs leading-3'>{cuisines.join(", ")}</p>
          <p className='text-slate-400 font-poppins text-xs leading-3'>{city}</p>
          <br />
          <p className='text-slate-400 font-poppins text-xs'>{}</p>
        </div>

        <div className='flex flex-col border p-5 items-center border-slate-300 rounded border-solid  font-poppins text-sm font-500'>
          <div className='flex justify-center items-center gap-2' >
            <img className='w-5' src={STAR_ICON} alt="" />
            <p>{avgRatingString}</p> 
          </div>
          <hr className='w-[100%] mx-auto' />
          <p>10k+ratings</p>
        </div>
       </div>
       <hr className='w-[100%] mx-auto my-10' />
       <div className='bg-slate-100 flex flex-col'>
       {
        categories.map((item)=> <CardItemList key={item?.card?.card?.title} categories = {item?.card?.card} />)
       }
       </div>
      </div>
    </div>
  )
}

export default RestaurantList