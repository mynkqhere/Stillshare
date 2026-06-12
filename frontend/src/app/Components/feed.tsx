"use client";
import PostCard from "./postcard";
import { useEffect, useState } from "react";
import axios from "axios";
function FeedCard() {
const [posts, setPosts] = useState([]);
async function fetchposts() {
try {
const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post/`, {withCredentials: true});
console.log(response.data.posts)
const successmsg = response.data.Message
setPosts(response.data.posts)
} catch (error: any) {
console.error("Failed to Fetch Posts", error)
}
}
useEffect(() => {
fetchposts();
}, []);
return (
<div>
{posts.map((file: any) => (
<PostCard key={file._id} post={file.Post} username={file.User.Username} caption={file.Caption}/>
))}
</div>
);
}
export default FeedCard;
