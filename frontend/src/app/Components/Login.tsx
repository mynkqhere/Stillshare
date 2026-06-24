"use client";
import { useState } from "react";
import styles from "../CSS/signup.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
function Loginform() {
const router = useRouter()
const [errormessage, setErrorMessage] = useState("")
async function handlesubmit(e: any) {
    e.preventDefault();
    const loginformdata = new FormData(e.target);
    console.log(loginformdata);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          username: loginformdata.get("username"),
          email: loginformdata.get("email"),
          password: loginformdata.get("password"),
        },
        { withCredentials: true },
      );
          localStorage.setItem("userid", response.data.Userid) // seting user id inside localstorage
      router.push("/home/feed");}
      
      catch (error: any) {
      console.log("Failed to login", error)
     }} 
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
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className={styles.input}
          type="text"
          name="password"
          placeholder="Password"
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
     {errormessage && <p className={styles.errormessage}>{errormessage}</p>}
    </div>
  );
}
export default Loginform;
