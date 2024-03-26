import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItemList from './CardItemList';
import CardList from './CardList';
import { clearItem } from '../utils/store/cardSlice';

const Card = () => {

    const cartItems = useSelector((store)=>store.card.items);

    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(clearItem())
    }
    

  return (
    <div className="max-w-[70%] mx-auto">
                {cartItems.length == 0 && <h1 className="font-poppins text-3xl pt-40 text-center">Your Cart is Empty</h1>}
                {
                  !cartItems.length == 0 && (
                    <CardList items = {cartItems} />
                  )
                }

                {/* // Clear Cart  */}
                
                {
                    !cartItems.length == 0 && (<button
                onClick={handleClick}
                 className="cursor-pointer px-7 py-3 m-2 text-xs bg-green-500 rounded-lg font-semibold text-white ">
                    Clear Cart
                 </button>)
                }
                
            </div>
  )
}

export default Card