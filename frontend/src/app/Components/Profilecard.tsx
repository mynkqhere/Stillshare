// here i am going to write the component of profilecard 
import { useRouter } from "next/navigation";
import style from "../css/Profile.module.css"
function ProfileCard(props: any){
    const router = useRouter()
    return(<div className={style.container} >
        <div className={style.items}>
        <span className={style.text} >{props.username}</span>
        <div className={style.pfp}><img className={style.image} src={props.image} alt={props.image} /></div>
        <span className={style.text} >{props.name}</span>
        <span className={style.text} >{props.bio}</span>
        <button onClick={()=> router.push("/edit-profile")}>Edit Profile</button>
        <button>Message</button>
         </div>
    </div>)
}
export default ProfileCard;