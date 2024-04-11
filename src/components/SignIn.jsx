import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/store/userSlice';
import {  useNavigate } from 'react-router-dom';
import { checkValidate } from "../utils/checkValidate"
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../supabaseClient';


const SignIn = () => {
    
    const [name, setName] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState(null)

    const [userData, setUserData] = useState([]);

    useEffect(()=>{
      getProducts();
    },[])
  
    async function getProducts(){
      try{
        const {data, error} = await supabase.from("signup").select("*")
        if(error) throw error
        if(data != null){
          setUserData(data)
          console.log(userData);
        }
      }catch(error){
        console.log(error);
      }
    }
    
    
    const handleSignUp = async() => {
      const message = checkValidate(name, password);
      setErrorMessage(message) // set a error message
      if(!message){
        const a = userData.find((e)=>{
          return e.name == name
        })
        if(a) {
          setErrorMessage("Alerady a user")
        }else{
          const {data, error} = await supabase.from("signup").insert({ // Adding to the supbase (DATABASE)
            name: name,
            password: password
          })
          dispatch(addUser({name: name, password: password})) // Adding to redux store 
          
          setName('')
          setpassword('')
          navigate("/")
        }
      }else return;
        
    }

  return (
    <>
<div className="w-full max-w-xs mx-auto mt-14 shadow-xl rounded-lg mb-28 px-6 py-8">
  <form onSubmit={(e) => e.preventDefault()} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block font-poppins text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input value={name} required onChange={(e)=> setName(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block font-poppins text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input value={password} required onChange={(e)=> setpassword(e.target.value)}  className="shadow appearance-none border font-poppins border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
    </div>
    <p className="text-red-600 text-bold px-3 py-4">{errorMessage}</p>
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