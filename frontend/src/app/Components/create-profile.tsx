"use client";
import axios from "axios";
function CreateProfileOPS(){
async function handlesubmit(event:any){
event.preventDefault()
const formdata = new FormData(event.target)
try{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/create-profile`,formdata,{withCredentials: true});
    console.log(response)
}catch(error){
    console.error("Found error while posting the data", error)
}
}
    return(<div>
        <form onSubmit={handlesubmit} >
            <input type="file" name="Profilepicture"/>
            <input type="text" name="Name" placeholder="Name"/>
            <input type="text" name="Bio" placeholder="Bio"/>
            <button type="submit">Submit</button>
        </form>
    </div>)
}
export default CreateProfileOPS;
