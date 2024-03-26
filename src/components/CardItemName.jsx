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
        <div>
        {
            items.map((item)=>(
                <div  key={item.card.info.id}>
                        <hr className='h-[1px] m-0 border-0 bg-gray-500' />
                        <div
                    data-testid = "foodItems" 
                    className='bg-white flex justify-between items-center gap-x-9 border-b-2 px-4 font-poppins py-10'>
                        <div>
                            <span className='font-semibold text-md select-none duration-300'>{item.card.info.name}</span> <br />
                            <span className='font-normal pt-2'>&#8377; {item.card.info.price / 100}</span>
                            <p className='font-extrathin pt-5 text-xs'>{item.card.info.description}</p>
                        </div>
                        <div className='shrink-0 relative'>
                            <img className='w-32 border h-32 object-cover rounded-lg' src={IMG + item.card.info.imageId} alt="" />
                            <button 
                            className='px-5 py-2 absolute -bottom-2 right-6 text-[11px]
                             bg-white text-lime-600 cursor-pointer font-bold border rounded-sm outline-1 
                             duration-200 hover:shadow-lg shadow-lime-500'
                             onClick={() => handleClick(item)}
                             >ADD +</button>
                        </div>
                    </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default CardItemName