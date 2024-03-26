import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/store/userSlice';

const SignIn = () => {
    
    const [name, setName] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch()

    
    
    const handleSignUp = () => {
        dispatch(addUser({name: name, password: password}))
        console.log(name);
    }

  return (
    <>
<div className="w-full max-w-xs mx-auto mt-28 shadow-xl rounded-lg px-6 py-8">
  <form onSubmit={(e) => e.preventDefault()} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block font-poppins text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input value={name} onChange={(e)=> setName(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block font-poppins text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input value={password} onChange={(e)=> setpassword(e.target.value)}  className="shadow appearance-none border font-poppins border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
    </div>
    <div className="flex items-center justify-between">
      <button 
      onClick={handleSignUp}
      className="cursor-pointer px-7 py-3 text-xs text-white bg-green-500 rounded-lg font-semibold  border border-black" type="button">
        Sign Up
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
    </>
  )
}

export default SignIn