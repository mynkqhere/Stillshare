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
    async function FetchProfile(){
        try{
            const userid = localStorage.getItem("userid") // user id in localstorage
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/Profile/get-user/${userid}`)
            const Data = response.data
             console.log(Data)
            setProfiledata(Data)
        }catch(error: any ){console.error("something went wrong:", (error as any) ,error?.response?.data?.Message)}
        // fetching posts of the user
        try{
            const userid = localStorage.getItem("userid")
            console.log(userid,"got user id")
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post/get-post/${userid}`)
            console.log("Fetched the post of this user:", response.data)
            const object = response.data.Post
            // const postusername = response.data.Post[0].User.Username // required
            // const postcaption =  response.data.Post[0].Caption // required
            // const post =  response.data.Post[0].Post // required // how do i deal with this type of data 
            setpostdata(object)
            console.log(object)
        }catch(error){console.error("failed to fetch posts", error)}
    }
useEffect(() => {FetchProfile()}, []) // run when component mounts

return(<div>
    <ProfileCard username={profiledata?.user?.User?.Username} image={profiledata?.user?.Profilepicture} name={profiledata?.user?.Name} bio={profiledata?.user?.Bio} button2="Edit Profile" onbutton2click={()=> router.push("/edit-profile")} button1="Create" onbutton1click={()=> router.push("/create-profile")}/>
{postdata.map((posts: any)=>(<PostCard key={posts._id} username={posts.User.Username} post={posts.Post} />))}

</div>)
}
export default ProfileOperation;

// done
