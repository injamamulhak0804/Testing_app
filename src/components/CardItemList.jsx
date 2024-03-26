import React, { useState } from 'react'
import CardItemName from './CardItemName';
import { DOWN_ARROW } from '../utils/constants';

const CardItemList = ({categories, setShowItem, showItem}) => {

  const handleClick = () =>{
    setShowItem()
  }
 
  return (
    <div>
        <div  onClick={handleClick} className='bg-white w-full font-poppins min-h-14 text-sm  items-center cursor-pointer flex justify-between'>
            <h3>{categories.title}({categories.length})</h3>
            <img src={DOWN_ARROW} className='w-6' alt="" />
        </div>
        {showItem && <CardItemName items = {categories.itemCards} />}
    </div>
  )
}

export default CardItemList