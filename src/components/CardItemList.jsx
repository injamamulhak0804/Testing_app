import React, { useState } from 'react'
import CardItemName from './CardItemName';
import { DOWN_ARROW } from '../utils/constants';

const CardItemList = ({categories, setShowItem, showItem}) => {

  const handleClick = () =>{
    setShowItem()
  }
 
  return (
    <div>
        <div  onClick={handleClick} className='px-5 bg-white  font-poppins text-sm mb-5 items-center cursor-pointer flex justify-between'>
            <h3>{categories.title}</h3>
            <img src={DOWN_ARROW} className='w-6' alt="" />
        </div>
        {showItem && <CardItemName items = {categories.itemCards} />}
    </div>
  )
}

export default CardItemList