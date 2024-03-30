import React from 'react'

const Contact = () => {
  return (
    <>
       <div className="font-bold font-poppins max-w-[840px] mt-10 mx-auto">
                <h1 className="text-3xl mb-10">Contact us</h1>
                <div className="flex flex-col gap-6 max-w-[600px]">
                    <input type="text" className="border h-10 pl-2 placeholder:font-poppins" placeholder="Name" />
                    <textarea className="border p-2 placeholder:font-poppins" placeholder="Message"
                     id="" cols="30" rows="10"></textarea>
                </div>
                <div className="mx-auto mt-4">
                    <button className="bg-yellow-300 font-poppins cursor-pointer px-4 py-2 rounded-lg mx-auto">Submit</button>
                </div>
            </div>
    </>
  )
}

export default Contact