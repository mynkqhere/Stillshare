import style from "../css/Search.module.css"
function SearchCard(props: any){
    return(<div className={style.Profilecontainer}>
       <div> <img className={style.Profileimage} src={props.pfp} alt="" /></div>
        <span>{props.username}</span>
        <span>{props.name}</span>
    </div>)
}
export default SearchCard