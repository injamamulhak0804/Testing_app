import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItemList from './CardItemList';
import CardList from './CardList';

const Card = () => {

    const cartItems = useSelector((store)=>store.card.items);

    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(clearCart())
    }
    

  return (
    <div className="max-w-[70%] mx-auto">
                <CardList items = {cartItems} />
                {/* // Clear Cart  */}
                
                {
                    !cartItems.length == 0 && (<button
                onClick={handleClick}
                 className="px-10 font-semibold m-10 hover:bg-yellow-400 py-2 bg-yellow-200 rounded-lg">
                    Clear Cart
                 </button>)
                }
                
                {cartItems.length == 0 && <h1 className="text-3xl pt-40 text-center">Your Cart is Empty</h1>}
            </div>
  )
}

export default Card