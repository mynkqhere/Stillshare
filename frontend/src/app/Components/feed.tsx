"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./postcard";

function FeedCard() {
const [posts, setPosts] = useState([]);

// function to fetch request server to get posts
async function Fetchposts(){
    try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post/`,{withCredentials: true})
        const fetchedPosts = Array.isArray(response?.data?.posts) ? response.data.posts : [];
        // setting post
        setPosts(fetchedPosts)
        console.log(fetchedPosts)
    }catch(error){console.error("Failed to fetch posts why? :", error)}
}
// fetch posts only when component loads
useEffect(()=> {Fetchposts()}, [])

// rendering posts
return(
<div>
    {Array.isArray(posts) && posts.map((files)=>(
        <PostCard key={files?.post_id} post={files?.post_url} caption={files?.caption} />
    ))}
</div>
)


}
export default FeedCard;
