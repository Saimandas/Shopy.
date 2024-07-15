
import axios from "axios";
import { useState } from "react";

const [data, setdata] = useState();

fetch("http://localhost:3000/api/v1/E-Commerce/users/products").then((data)=>{
    setdata(data.json())
})

console.log(data);