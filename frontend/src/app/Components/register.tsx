"use client";
import axios from "axios";
import { error } from "console";
import { useState } from "react";
function Register(){
    const [errormessage, setErrorMessage] = useState("");
    const [successmessage, setSucessMessage] = useState("");
async function handlesubmit(e: any){
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData) // testing if formdata is being captured correctly.
    try{
    const response = await axios.post("https://stillshare-y7ku.onrender.com/api/auth/register", {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),

     })
    console.log("Registration Successfull")
    setSucessMessage(response.data.Message);
    console.log(response.data.Message);
    }catch(error){
        console.error("Error during registration:"),
        console.error(error.response.data.Message);
        setErrorMessage(error.response.data.Message)
    };
     }
        return (<div className=" bg-black min-h-screen border flex flex-col items-center justify-center p-4 " >
        <span className="text-white font-bold ">Register</span>
        <form onSubmit={handlesubmit} className="flex flex-col items-center  p-4 gap-4 ">
            <input className=" text-white p-2 border rounded-sm " type="text" name="username" placeholder="Username" />
            <input className=" text-white p-2 border rounded-sm " type="text" name="email" placeholder="Email" />
            <input className=" text-white p-2 border rounded-sm " type="text" name="password" placeholder="Password" />
            <button className="text-white p-2 border rounded-sm" type="submit" >Submit</button>
        {errormessage && <span className="text-red-500" >{errormessage}</span>}
        {successmessage && <span className="text-green-500" >{successmessage}</span>}
        
        </form>
    </div>)
}
export default Register;

 