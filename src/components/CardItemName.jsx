import React from 'react'
import { IMG } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/store/cardSlice';

const CardItemName = ({items}) => {

    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(addItem(item))
    }



    return (
    <>
        {
            items.map((item)=>(
                <div key={item.card.info.id} >
                    <div className='px-5 flex justify-between'>
                    <div>
                        <p className='font-poppins text-sm'>{item.card.info.name}</p>
                        <p className='font-poppins max-w-sm text-xs text-slate-400 font-normal'>{item.card.info.description}</p>
                    </div>
                    <div className='relative'> 
                        <img src = {IMG+item?.card?.info?.imageId} className='w-[150px] rounded-lg h-[150px] object-cover' alt="" />
                        <button onClick={()=> handleClick(item)} className='px-5 py-2 bg-white absolute cursor-pointer hover:shadow-lg -bottom-1 font-poppins rounded text-lime-500 left-[25%] border'>Add + </button>
                    </div>
                    </div>
                    <hr className='my-20 w-[95%]' />
                </div>
            ))
        }
    </>
  )
}

export default CardItemName