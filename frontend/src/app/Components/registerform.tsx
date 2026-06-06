"use client";
import { useState } from "react";
import styles from "../css/signup.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
function RegisterForm() {
const [errormessage, setErrorMessage] = useState("")
const [successmessage, setSuccessMessage] = useState("")
const router = useRouter();
async function handlesubmit(e: any) {
setSuccessMessage("")
setErrorMessage("")
e.preventDefault();
const registerformData = new FormData(e.target);
try {
const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
username: registerformData.get("username"),
email: registerformData.get("email"),
password: registerformData.get("password"),
}, {withCredentials: true});
// try 
console.log(response.data.Message) // success message for signup 
setSuccessMessage(response.data.Message); // set success message
// automatically login users and giving them session.
const loginResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
email: registerformData.get("email"),
password: registerformData.get("password"),
}, {withCredentials: true});
router.push("/Feed");
}
catch (error: any) {
// catch 
console.error("failed to signup", error.response.data.Message) // error message from server
setErrorMessage(error.response.data.Message); // set error message
}
}
return (
<div className={styles.screen}>
<div className={styles.card}>
<h1 className={styles.heading}>Stillshare</h1>
<form className={styles.form} onSubmit={handlesubmit}>
<input onChange={()=> setErrorMessage("")} className={styles.input} type="text" name="username" placeholder="Username" />
<input className={styles.input} type="text" name="email" placeholder="Email" />
<input className={styles.input} type="text" name="password" placeholder="Password" />
<button className={styles.submit} type="submit">Sign up</button>
</form>
<p className={styles.label}>Already have an account?</p>
<a className={styles.link} href="/login">login</a>
{errormessage && <p>{errormessage}</p>}
</div>
</div>
);
}
export default RegisterForm;