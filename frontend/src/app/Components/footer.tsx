import styles from "../css/signup.module.css";
function Footer(){
    return(<footer className={styles.footer}>
             <a className={styles.flink} href="/Home" >Home</a>
             <span>Search</span>
             <span>Message</span>
             <a className={styles.flink} href="/profile">Profile</a></footer>)
}
export default Footer;