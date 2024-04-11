import React, { useEffect, useState } from 'react';
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
        console.log("changed");
        let initi = 0
        let price = items.reduce((item, curr)=> item + curr.card.info.price/100, initi);
        setPrice(price)
        setDiscount(price - (price/100*10))
        setDelivery(20) 
        setAmount(price + Discount + delivery) 
    },[])
    
    return (
    <>
        <div className='flex  justify-evenly flex-wrap'>
            <div className='w-9/12'>
                {
                    items.map((items)=>{
                        const {imageId, name, id, category, price} = items.card.info
                        return  (
                            <div key={id} className='flex font-poppins pt-10 mb-7 border-b-2 pb-5 justify-between w-full'>
                                <div>
                                    <h4 className='pl-5 pt-5'>{name}</h4>
                                <p className='pl-5'>{category}</p>
                                <p className='pl-5'>₹ {price/100}</p>
                                <button className='cursor-pointer px-7 py-3 m-2 text-xs bg-green-500 rounded-lg font-semibold text-white'>Remove</button>
                                </div>
                                <div className='relative'>
                                    <div>
                                    <img src={IMG + imageId} className='w-60 h-32 object-cover rounded-lg' alt="" />
                                    </div>
                                    <button onClick={()=>btnClick(id,'-')} className='px-3 text-white text-xl font-bold absolute -bottom-2 left-[130px]  bg-green-500 cursor-pointer rounded'>-</button>
                                    <button onClick={()=> btnClick(id,'+')} className='px-3 text-white text-xl font-bold -bottom-2 left-[60px] absolute bg-green-500 cursor-pointer rounded'>+</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

                {/* CALCULATION */}

            <div className='bg-gray-100 rounded px-5'>
                <div className='min-w-[350px] md:min-w-[250px] font-poppins font-bold min-h-[380px] p-5'>
                    <p className=' mb-3 text-center font-sans font-bold'>ORDER SUMMARY</p>
                    <hr />
                    <div className='my-5 flex flex-col gap-4'>
                    <p className='text-sm font-sans font-normal'>No of items: {items.length}</p>
                    <p className='text-sm font-sans font-normal'>Price: ₹{price.toFixed(2)}</p>
                    <p className='text-sm font-sans font-normal'>Discount (10%): ₹{Discount.toFixed(2)}</p>
                    <p className='text-sm font-sans font-normal'>Delivery Charge: ₹{delivery.toFixed(2)}</p>
                    </div>
                    <hr />
                    <p className='text-lg font-medium my-5'>Total Amount:   ₹{amount.toFixed(2)}</p>
                    <center>
                        <button className='px-10 py-2  text-sm font-poppins bg-white text-lime-600 cursor-pointer font-bold border rounded-sm outline-1 duration-200 hover:shadow-lg shadow-lime-500'>Place a Order </button>
                    </center>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardList