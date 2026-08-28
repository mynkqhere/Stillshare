// writing the code of operations of profile here 
"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
import ProfileCard from "./Profilecard";
import PostCard from "./postcard";

function ProfileOperation(){
    const router = useRouter()
    const [postdata, setpostdata] = useState([])
    const [profiledata, setProfiledata] = useState({})

// function to fetch user profile
async function Fetchprofile(){
    try{
        const userid = localStorage.getItem("userid")
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/get-user/${userid}`)
        const data = response?.data?.user
        // Setting profile data
        setProfiledata(data)

    }catch(error){console.error("Failed to Fetch profile why?:", error)}
}


// Fetching profile only when component will mount
useEffect(()=>{Fetchprofile()}, []) 

// rendering profile
return(
    <div>
    <ProfileCard image={profiledata?.avatar} name={profiledata?.name} bio={profiledata.bio}/>
    </div>
)

}
export default ProfileOperation;
