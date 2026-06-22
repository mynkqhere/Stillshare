"use client";
import axios from "axios";
import { useState } from "react";
function Createops(){
    const [caption, setCaption] = useState("")
    const [post, setPost] = useState()
    function handlechange(e: any){
    const Caption = e.target.value
    setCaption(Caption)
    }
    function handlefilechange(e:any){
        const Post = e.target.files[0]
        setPost(Post)
    }
    async function handlesubmit(){
        if(!post){console.log("no post")}
        try{
            const formdata = new FormData()
            formdata.append("Post", post)
            formdata.append("Caption", caption)
        
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/post/create-post`, formdata, {withCredentials: true})
        console.log("post created successfully", response)
        
    }catch(error){console.error("Failed to post", error)}
    }
    return(<div>
        <form onSubmit={handlesubmit}>
            <input type="file" name="post" onChange={handlefilechange} />
            <input type="text" name="caption" placeholder="caption" value={caption} onChange={handlechange} />
            <button>Post</button> 
            </form>
    </div>)
}
export default Createops;