"use client";
import { useState } from "react";
import styles from "../CSS/signup.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
function Loginform() {
const router = useRouter()
const [isloading, setIsloading] = useState(false)
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [errormessage, setErrorMessage] = useState("")
async function handlesubmit(e: any){
    e.preventDefault();
    setIsloading(true)
    const formdata ={
      username: username,
      email: email,
      password: password
    }
     
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,formdata,{ withCredentials: true },);
        localStorage.setItem("userid", response.data.Userid)
        setIsloading(false)
        router.push("/home/feed");}catch(err: any){setErrorMessage(err?.response?.data?.Message),setIsloading(false)} }
  return (
    <div className={styles.screen}>
      <div className={styles.card}>
      <h1 className={styles.heading}>Stillshare</h1>
      <form
        onSubmit={handlesubmit}
        className={styles.form}
      >
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a className={styles.link} href="#forgot-password">Forgot your password?</a>
        <button
          className={styles.submit}
          type="submit"
        >
          Login
        </button>
      </form>
      <p className={styles.label}>Don't have an account?</p>
       <a className={styles.link} href="/">Sign up</a>
     </div>
     {isloading && <p className={styles.errormessage}>Logging you in...</p>}
     {errormessage && <p className={styles.errormessage}>{errormessage}</p>}
    </div>
  );
}
export default Loginform;
