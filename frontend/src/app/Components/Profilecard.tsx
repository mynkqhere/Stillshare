// here i am going to write the component of profilecard 
function ProfileCard(props: any){
    return(<div>
        <span>{props.username}</span>
        <img src={props.image} alt={props.image} />
        <span>{props.name}</span>
        <span>{props.bio}</span>
    </div>)
}
export default ProfileCard;