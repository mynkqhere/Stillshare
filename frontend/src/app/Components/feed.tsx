"use client";
import PostCard from "./postcard";
import { useEffect, useState } from "react";
import axios from "axios";
function FeedCard() {
const [posts, setPosts] = useState([]);
async function fetchposts() {
try {
const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post/`, {withCredentials: true});
// try response
console.log(response)
console.log(response.data.Message); 
} catch (error: any) {
// errors of post 
console.error("Failed to fetch posts", error.response.data.Message)
}
}
useEffect(() => {
fetchposts();
}, []);
return (
<div>
{posts.map((file) => (
<PostCard key={file._id} post={file.Post} />
))}
</div>
);
}
export default FeedCard;