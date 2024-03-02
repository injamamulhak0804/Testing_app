import React, { useEffect, useState } from 'react'
import { IMG } from '../utils/constants';

const CardList = ({items}) => {
    const [price, setPrice] = useState(0);
    const [Discount, setDiscount] = useState(0);
    const [delivery, setDelivery] = useState(0);
    const [amount, setAmount] = useState(0);

    const btnClick = (id, operation) =>{
        const res = items.filter((e)=> e.card.info.id == id)
        operation === '+' ? setPrice(price + res[0].card.info.price/100) : setPrice(price - res[0].card.info.price/100)
        setDiscount(price + (price/100*10))
        setDelivery(20) 
        setAmount(price + Discount + delivery)
    }
    
    
    useEffect(()=>{
        let initi = 0
        let price = items.reduce((item, curr)=> item + curr.card.info.price/100, initi);
        setPrice(price)
        setDiscount(price - (price/100*10))
        setDelivery(20) 
        setAmount(price + Discount + delivery) 
    },[])
    
    return (
    <>
        <div className='flex  justify-evenly flex-wrap gap-2'>
            <div className='w-9/12'>
                {
                    items.map((items)=>{
                        const {imageId, name, id, category, price} = items.card.info
                        return  (
                            <div key={id} className='flex mb-7 border-b-2 pb-5 justify-between w-full'>
                                <div>
                                    <h4 className='pl-5 pt-5'>{name}</h4>
                                <p className='pl-5'>{category}</p>
                                <p className='pl-5'>₹ {price/100}</p>
                                <button className='mt-10 px-10 py-2 hover:bg-red-800 duration-100 hover:text-white bg-yellow-200 rounded font-semibold'>Remove</button>
                                </div>
                                <div className='relative'>
                                    <div>
                                    <img src={IMG + imageId} className='w-60 h-32 object-cover rounded-lg' alt="" />
                                    </div>
                                    <button onClick={()=>btnClick(id,'-')} className='px-3 text-xl font-bold absolute -bottom-2 left-[130px]  bg-yellow-300 rounded'>-</button>
                                    <button onClick={()=> btnClick(id,'+')} className='px-3 text-xl font-bold -bottom-2 left-[60px] absolute bg-yellow-300 rounded'>+</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <div className='min-w-[350px] border-2 rounded-lg border-gray-200 min-h-[380px] p-5'>
                    <p className=' mb-3 text-center font-sans font-bold'>ORDER SUMMARY</p>
                    <hr />
                    <div className='my-5 flex flex-col gap-4'>
                    <p className='text-xl font-sans font-thin'>No of items: {items.length}</p>
                    <p className='text-xl font-sans font-thin'>Price: ₹{price.toFixed(2)}</p>
                    <p className='text-xl font-sans font-thin'>Discount (10%): ₹{Discount.toFixed(2)}</p>
                    <p className='text-xl font-sans font-thin'>Delivery Charge: ₹{delivery.toFixed(2)}</p>
                    </div>
                    <hr />
                    <p className='text-xl font-semibold my-5'>Total Amount:   ₹{amount.toFixed(2)}</p>
                    <center>
                        <button className='px-10 hover:bg-yellow-400 py-2 bg-yellow-200 rounded font-semibold'>Place a Order </button>
                    </center>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardList