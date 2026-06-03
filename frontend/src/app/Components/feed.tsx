"use client";
import PostCard from "./postcard";
import { useEffect, useState } from "react";
import axios from "axios";
function FeedCard(){
const [posts, setPosts] = useState([])
async function fetchposts(){
    try{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post`,{
        withCredentials: true})
        
    console.log(response)
    console.log(response.data.posts)
    setPosts(response.data.posts)
    console.log("Posts fetched successfully!!")
    }

    catch(error: any){
        console.error("Filed to fetch posts.")
        console.error(error.response)
    }
}
useEffect(() => {fetchposts()}, [])

return(<div>
   {posts.map((file)=> (
    <PostCard key={file._id} post={file.Post} />
   ) )}
</div>)
}

export default FeedCard;