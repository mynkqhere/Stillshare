"use client";
import axios from "axios";
import { useState, useEffect } from "react";
 function Feedcard(){
    const [Posts, setPosts] = useState([]) 
    async function fetchPosts(){
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
            console.log(response.data.Message);

        }

        catch(error){
            console.error("Filed to fetch posts:", error);
            console.error(error.response.data.Message)

        }
    }
    useEffect(() => {fetchPosts()}, []); // calling fetchPost only when page loads. 
    
    return(<div>FeedPage</div>)
}
export default Feedcard;