"use client";
import styles from "../css/signup.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
function RegisterForm() {
  const router = useRouter();
  async function handlesubmit(e: any) {
    e.preventDefault();
    const registerformData = new FormData(e.target);
    console.log(registerformData);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          username: registerformData.get("username"),
          email: registerformData.get("email"),
          password: registerformData.get("password"),
        },
      );
      console.log("Registration was successfull");
      console.log(response.data.Message);
      console.log(response.status);

      // automatically login users and giving them session.
      const loginResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          email: registerformData.get("email"),
          password: registerformData.get("password"),
        },
        { withCredentials: true },
      );
      console.log(
        "Login was successfull after registration and session cookie should be set",
      );
      console.log(loginResponse.data.Message);
      console.log(loginResponse.status);

      // after successfull login we will push users to feed page
      router.push("/Feed");
    } catch (error: any) {
      console.error("Failed to register");
      console.error(error.response.Message);
      console.error(error.response.status);
      console.error("login failed after registration");
      console.error(error.loginResponse.data.Message);
      console.error(error.loginResponse.status);
    }
  }
  return (
    <div className={styles.screen}>
      <div className={styles.card} >
        <h1 className={styles.heading}>Stillshare</h1>
        <form className={styles.form} onSubmit={handlesubmit}>
          <input className={styles.input} type="text" name="username" placeholder="Username" />
          <input className={styles.input} type="text" name="email" placeholder="Email" />
          <input className={styles.input} type="text" name="password" placeholder="Password" />
          <button className={styles.submit} type="submit">Sign up</button>
        </form>
        <p className={styles.label}>Already have an account?</p>
        <a className={styles.link} href="/login">login</a>
      </div>
    </div>
  );
}
export default RegisterForm;
