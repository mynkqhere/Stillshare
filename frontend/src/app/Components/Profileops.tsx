// writing the code of operations of profile here 
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ProfileCard from "./Profilecard";
function ProfileOperation(){
    const [profiledata, setProfiledata] = useState({})
    async function FetchProfile(){
        try{
            const userid = localStorage.getItem("userid") // user id in localstorage
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/Profile/get-user/${userid}`)
            const Data = response.data
             console.log(Data)
            setProfiledata(Data)
        }catch(error: any ){console.error("something went wrong:", (error as any) ,error?.response?.data?.Message)}
    }
useEffect(() => {FetchProfile()}, []) // run when component mounts

return(<div>
    <ProfileCard username={profiledata?.user?.User?.Username} image={profiledata?.user?.Profilepicture} name={profiledata?.user?.Name} bio={profiledata?.user?.Bio} />
</div>)
}
export default ProfileOperation;

// done
