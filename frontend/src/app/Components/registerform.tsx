"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
function RegisterForm(){
    const router = useRouter();
async function handlesubmit(e: any){
    e.preventDefault();
    const registerformData = new FormData(e.target);
    console.log(registerformData)
try{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,{
        username: registerformData.get("username"),
        email: registerformData.get("email"),
        password: registerformData.get("password")
    })
    console.log("Registration was successfull")
    console.log(response.data.Message);
    console.log(response.status);

    // automatically login users and giving them session.
    const loginResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,{
        email: registerformData.get("email"),
        password: registerformData.get("password")
    }, {withCredentials: true});
    console.log("Login was successfull after registration and session cookie should be set")
    console.log(loginResponse.data.Message);
    console.log(loginResponse.status);

    // after successfull login we will push users to feed page
    router.push("/Feed");

}

catch(error: any){
    console.error("Failed to register");
    console.error(error.response.Message);
    console.error(error.response.status);
    console.error("login failed after registration");
    console.error(error.loginResponse.data.Message);
    console.error(error.loginResponse.status);
}}
 return(<div>
        <span>Register</span>
        <form onSubmit={handlesubmit} >
            <input type="text" name="username" placeholder="Username"/>
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="password" placeholder="Password" />
            <button type="submit" >Submit</button>
        </form>
    </div>)
}
export default RegisterForm;
