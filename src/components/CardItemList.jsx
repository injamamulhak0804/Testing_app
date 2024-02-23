import React from 'react'
import CardItemName from './CardItemName';
import { DOWN_ARROW } from '../utils/constants';

const CardItemList = ({categories}) => {
    console.log(categories);
  return (
    <div>
        <div className='px-5 bg-white font-poppins text-sm mb-5 items-center cursor-pointer flex justify-between'>
            <h3>{categories.title}</h3>
            <img src={DOWN_ARROW} className='w-8' alt="" />
        </div>
        <CardItemName items = {categories.itemCards} />

    </div>
  )
}

export default CardItemList