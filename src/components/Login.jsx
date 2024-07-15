import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const {handleSubmit,register}=useForm();
    const [Error, setError] = useState("");
    //const navigate=
    const login= async (data)=>{
        try {
            const login = await axios.post("http://localhost:3000/api/v1/E-Commerce/users/login",data);
            if (login) {
                
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
   <form onSubmit={handleSubmit(login)}>
     <input type="email" label="Email" {...register("email")} placeholder='Enter Your Email'  />
     <input type="password" label="Password" {...register("password")} placeholder='Enter Your Email' />
     <button className=' p-2 bg-green-500 active:bg-green-400 rounded-md text-white font-semibold' type='submit'>Submit</button>
   </form> 
  )
}



export default Login