"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ProfileCard from "./Profilecard";
function UserProfileOps(){
const [Userdata, setUserdata] = useState([])
    const params = useParams()
     const userid =params.id 
     console.log(userid)
    async function fetchprofile(){
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/get-user/${userid}`)
            console.log("Successfully fetched user profile",response.data.user)
            const data = response?.data?.user
            setUserdata(data)
        }catch(error){console.log("Failed to fetch profile", error)}
    }
    useEffect(() => {fetchprofile()}, [])
    
    return(<div>
        <ProfileCard username={Userdata?.User?.Username} name={Userdata?.Name} bio={Userdata.Bio} image={Userdata?.Profilepicture} button2="Follow" onbutton2click={()=> console.log("Clicked follow")}  />
    </div>)
}
export default UserProfileOps;
