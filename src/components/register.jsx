"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/utils/zod";
import { Button } from "./ui/button";
import axios from "axios";
import { useEffect } from "react";


const Register = () => {
  const  [usernameMessage, setusernameMessage] = useState(null);
  const [username, setusername] = useState("");
  const [displayUsername, setdisplayUsername] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username:""
    },
  });
 const debounce= useDebouncedCallback((e)=>{setusername(e)},300);
  const checkUsernameMessage= async ()=>{
    try {
      const response= await axios.get("/users/check-username",{usernameMessage});
      setusernameMessage(response.data.message);
    } catch (error) {
      setusernameMessage(error.message)
    }
  }

  useEffect(()=>{
    checkUsernameMessage()
  },[username])
  const onSubmit = async (data) => {
    // try {
    //   const response= await axios.post("/users/register",{data});
    // } catch (error) {
     
    // }
    console.log(data);
  };

  return (
    <div className=" h-screen  flex justify-center items-center">
      <Form {...form}>
       
      <form onSubmit={form.handleSubmit(onSubmit)} className="  border-1 shadow-lg h-3/4 w-[90%] sm:w-[30%] p-3 px-10 pt-8 flex flex-col  ">
      <div className=" w-full flex flex-col justify-center items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5985E1"><path d="M222.96-257.63q62.76-39.76 124.02-59.9T480-337.67q71.76 0 133.76 20.38 62 20.38 124.28 59.66 43.53-54.24 61.67-108.15Q817.85-419.7 817.85-480q0-143.86-96.98-240.86-96.98-96.99-240.83-96.99-143.84 0-240.87 96.99-97.02 97-97.02 240.86 0 60.28 18.53 114.14t62.28 108.23Zm256.85-190.7q-58.57 0-98.4-40.04-39.84-40.05-39.84-98.46t40.02-98.39q40.03-39.98 98.6-39.98 58.57 0 98.4 40.17 39.84 40.16 39.84 98.57 0 58.42-40.02 98.28-40.03 39.85-98.6 39.85Zm-.21 374.31q-84.11 0-158.34-31.93-74.23-31.92-129.28-87.33-55.05-55.4-86.5-129.28-31.46-73.87-31.46-157.91 0-84.04 31.98-157.96t87.32-128.75q55.33-54.84 129.23-86.94 73.89-32.1 157.95-32.1 84.06 0 157.95 32.1 73.9 32.1 128.73 86.94 54.84 54.83 86.94 128.89 32.1 74.05 32.1 158.02 0 83.98-32.1 157.8-32.1 73.82-86.94 129.15-54.83 55.34-129.01 87.32-74.19 31.98-158.57 31.98Z"/></svg>
      <h1 className=" font-bold  text-2xl"> Create Account</h1>
      </div>
     
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            
            <FormItem >
               <FormLabel><h1 className=" ml-1 text-gray-500 text-base font-light">Username:</h1></FormLabel>
              <FormControl className=" h-12 pt-3">
                <Input placeholder="" className=" outline-none    border-b-2" {...field} onChange={(e)=>{console.log(e);}} />
              </FormControl>
              <FormDescription>
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel ><h1 className=" ml-1 text-gray-500 text-base font-light">Email:</h1></FormLabel>
              <FormControl className=" h-12 pt-3" >
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <h1 className=" ml-1 text-gray-500 text-base font-light">Password:</h1>
              <FormControl className=" h-12 pt-3">
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

     <Button className=" mt-[10%]"> Submit</Button> 
     <p className=" mt-5 ">Already Have An Account...</p>
     <a href="" className=" border-b-1 border-red-600  w-fit font-semibold text-red-700">Sign In</a>
      </form>
      
    </Form>

    
    </div>
  );
};

export default Register;
