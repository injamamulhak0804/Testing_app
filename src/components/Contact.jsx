import React, { useState } from 'react'
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';

const Contact = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async () =>{
    const {data, error} = await supabase.from("contact").insert({
      email: email,
      message: message
    })
    toast.success("Thanks for your Message");
    setEmail("");
    setMessage("");
    
    if (error) throw error;
  }
  return (
    <>
       <div className="font-bold font-poppins max-w-[840px] mt-10 mx-auto">
                <h1 className="text-3xl mb-10">Contact us</h1>
                <form onSubmit={(e)=> e.preventDefault()}>
                <div className="flex flex-col gap-6 max-w-[600px]">
                    <input value={email} required onChange={(e)=> setEmail(e.target.value)}  type="email" className="border h-10 pl-2 placeholder:font-poppins" placeholder="Email" />
                    <textarea value={message} required onChange={(e)=> setMessage(e.target.value)}  className="border p-2 placeholder:font-poppins" placeholder="Message"
                     id="" cols="30" rows="10"></textarea>
                </div>
                <div className="mx-auto mt-4">
                    <button onClick={handleClick} className="bg-yellow-300 font-poppins cursor-pointer px-4 py-2 rounded-lg mx-auto">Submit</button>
                </div>
                </form>
        </div>
    </>
  )
}

export default Contact