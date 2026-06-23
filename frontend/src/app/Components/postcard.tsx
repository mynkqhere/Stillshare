import axios from "axios";
import styles from "../css/signup.module.css"
function PostCard(props: any){
    async function handledelete(postid: any){
        try{
            const posttobedeleted = postid
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post/delete-post/${posttobedeleted}`)
            console.log("Successfully Deleted the clicked post", response)
        }catch(error){console.error("Failed to delete this post", error)}
    }
    return(
    <div className={styles.Feed}>
        <div className={styles.postcard} >
        <span>{ props.username}</span>
        <img src={props.post} alt={props.caption} />
        <span>{props.caption}</span></div>
        <button onClick={()=> handledelete(props.postid)}>Delete</button>
        
        
    </div>)
}
export default PostCard;