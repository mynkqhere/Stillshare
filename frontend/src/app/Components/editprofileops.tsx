"use client";
import axios from "axios";
import { useState } from "react";
function Editprofileops(){
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [pfp, setPfp] = useState()
function handlechangefile(e: any){
    const profilepicture = e.target.files[0]
    setPfp(profilepicture);
}     

async function handlesubmit(e: any){
    e.preventDefault()
    // to change username
    const usernamedata =  new FormData()
    const Userid =  localStorage.getItem("userid")
    usernamedata.append("username", username)
    try{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/change-username/${Userid}`,usernamedata, {withCredentials: true})
    console.log("SUCCESSFULLY CHANGED USERNAME",response)
    }catch(error:any){console.log("Failed to change username:",error?.response)};
    
}

    return(<div>
        <form onSubmit={handlesubmit}>
            <input type="file" name="pfp" accept="image/png" onChange={handlechangefile}/>
            <input type="text" name="name" placeholder="Name" value={name} onChange={((e)=>(setName(e.target.value)))} /> 
            <input type="text" name="username" placeholder="Username" value={username} onChange={((e)=>(setUsername(e.target.value)))} />
            <input type="text" name="bio" placeholder="Bio" value={bio} onChange={((e)=>(setBio(e.target.value)))} />
            <button>Save</button>
        </form>
    </div>)
}
export default Editprofileops;

// i want to track the inputs so that when user click on save only the final data goes, 
// plus ive made differernt apis for specifc inputs here on backend to update the details 
// i need to know how to track the file using usestate  
// When save is clicked we will have to validate if post request is successfull if so then we will push users back to the profile page so they get new profile to view of theirs.

// i need to track what file is selected and then set it inside variable 
//if i append all the final inputs inside the formdata but my backend only expects single input like username, name, profilepicture and bio and i have 4 of them to upgrade or to create the previous resource i can create a async function to handle form submition where i can  run 4 post requests to different endpoints sequencely. 