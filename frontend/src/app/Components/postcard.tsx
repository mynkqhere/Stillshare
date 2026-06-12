import styles from "../css/signup.module.css"
function PostCard(props: any){
    return(
    <div className={styles.Feed}>
        <div className={styles.postcard} >
        <span>{ props.username}</span>
        <img src={props.post} alt={props.caption} />
        <span>{props.caption}</span></div>
        
    </div>)
}
export default PostCard;