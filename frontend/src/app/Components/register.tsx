"use client";
import axios from "axios";
function Register(){
async function handlesubmit(e: any){
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData) // testing if formdata is being captured correctly.
        await axios.post("https://stillshare-y7ku.onrender.com/api/auth/register", {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),

     })}
        return (<div className=" bg-black min-h-screen border flex flex-col items-center justify-center p-4 " >
        <span className="text-white font-bold ">Register</span>
        <form onSubmit={handlesubmit} className="flex flex-col items-center  p-4 gap-4 ">
            <input className=" text-white p-2 border rounded-sm " type="text" name="username" placeholder="Username" />
            <input className=" text-white p-2 border rounded-sm " type="text" name="email" placeholder="Email" />
            <input className=" text-white p-2 border rounded-sm " type="text" name="password" placeholder="Password" />
            <button className="text-white p-2 border rounded-sm" type="submit" >Submit</button>
        </form>
    </div>)
}
export default Register;

 