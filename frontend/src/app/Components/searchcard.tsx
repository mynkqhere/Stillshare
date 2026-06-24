import { useRouter } from "next/navigation"
import axios from "axios"
import style from "../CSS/Search.module.css"
function SearchCard(props: any){
    const router = useRouter()
    async function handleprofileclick(userid:any){
        try{
        const ID = userid
        console.log(ID)
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/get-user/${ID}`)
        console.log("Successfully fetched user profile", response)
      router.push(`/profile/userprofile/${ID}`)
        

    }catch(error){console.log("Failed to fetch user profile", error)}
 

    }
    return(<div onClick={()=> handleprofileclick(props.userid)} className={style.Profilecontainer}>
       <div> <img className={style.Profileimage} src={props.pfp} alt="" /></div>
        <span>{props.username}</span>
        <span>{props.name}</span>
    </div>)
}
export default SearchCard