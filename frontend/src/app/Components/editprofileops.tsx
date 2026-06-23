"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
function Editprofileops(){
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [profilepicture, setProfilepicture] = useState(null)
function handlechangefile(e: any){
    const file = e.target.files[0] // actual file
    setProfilepicture(file) 
}     

async function handlesubmit(e: any){
    e.preventDefault()
    // to change username
    const payload = {username: username}
    if(!username || username.trim()===""){return console.log("not moving forward empty username")}
    console.log(payload)
    const Userid =  localStorage.getItem("userid")
    try{
    const response1 = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/change-username/${Userid}`,payload, {withCredentials: true})
    console.log("SUCCESSFULLY CHANGED USERNAME",response1)
    router.push("/profile")
    }catch(error:any){console.log("Failed to change username:",error?.response)};
    // to change bio
    try{
    const payload2 = {bio: bio} 
    const response2 = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/change-bio/${Userid}`, payload2, {withCredentials: true})
    console.log("Successfully changed bio:", response2)
    router.push("/profile")
    }catch(error){console.error("Failed to change bio", error)};
    // to change name
    try{
        const payload3 = {name: name}
        const response3 = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/change-name/${Userid}`, payload3, {withCredentials: true})
        console.log("Successfully changed name:", response3)
        router.push("/profile")
    }catch(error){console.error("Failed to change name:", error)}
    // to change profile picture
    try{
        const imagedata = new FormData()
        if(profilepicture){
            imagedata.append("Profilepicture", profilepicture)
        }else(console.log("No profile picture is set"))

     const response4 = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/change-profilepicture/${Userid}`,imagedata, {withCredentials: true})
     console.log("successfully changed profile picture", response4);
     router.push("/profile")
    }catch(error){console.error("Failed to change profile picture", error)}
}

    return(<div>
        <form onSubmit={handlesubmit}>
            <input type="file" name="profilepicture" accept="image/png" onChange={handlechangefile}/>
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