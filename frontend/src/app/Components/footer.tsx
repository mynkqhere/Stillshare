import styles from "../CSS/signup.module.css";
function Footer(){
    return(<footer className={styles.footer}>
             <a className={styles.flink} href="/home/feed" >Home</a>
             <a href="/search">Search</a>
             <span>Message</span>
             <a className={styles.flink} href="/profile/">Profile</a></footer>)
}
export default Footer;