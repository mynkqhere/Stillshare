"use client";
import axios from "axios";
import { useState,useEffect, } from "react";
import UserProfileOps from "./user-profileops";
import SearchCard from "../Components/searchcard";
function Searchops(){
const [Name, setName] = useState("")
const [Profiledata, setProfiledata] = useState([])
async function fetchuserprofile(){
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/${Name}`)
            console.log("user fetched successfully",response.data.profile)
            const data = response.data.profile
            setProfiledata(data) 
            UserProfileOps(data)
            }catch(error){console.error("something went wrong", error)}
            }

            useEffect(() => {fetchuserprofile()}, [Name])

    return(<div>
        
            <input type="text" name="search" placeholder="Search profile" value={Name} onChange={(e)=> setName(e.target.value)}/>
        {Profiledata.map((data)=>(
        <SearchCard key={data._id} username={data?.User?.Username} pfp={data?.Profilepicture} name={data.Name} userid={data?.User?._id} />
        ))}
    </div>)
}
export default Searchops;