import React from 'react'

const CardItemName = ({items}) => {
    return (
    <>
        {
            items.map((item)=>(
                <div key={item.card.info.id} className='px-5 flex'>
                    <div>
                    <p className='font-poppins text-sm'>{item.card.info.name}</p>
                    <p className='font-poppins max-w-sm text-xs text-slate-400 font-normal'>{item.card.info.description}</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default CardItemName