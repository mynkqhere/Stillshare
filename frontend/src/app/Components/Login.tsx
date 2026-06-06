"use client";
import styles from "../css/signup.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
function Loginform() {

  const router = useRouter();
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
      console.log("login successfull");
      console.log(response);
      router.push("/Feed");
    } catch (error: any) {
      console.error("login failed");
      console.error(error.response);

      
    }
  }

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
    </div>
  );
}
export default Loginform;
