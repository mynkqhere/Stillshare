"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../CSS/signup.module.css";
function SignupForm(){
    const router = useRouter()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isloading, setIsloading] = useState(false)

    async function handlesubmit(e:any){
        setIsloading(true)
        e.preventDefault()
        const formdata ={
            username: username,
            email: email,
            password: password
        }
       
        try{
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, formdata, {withCredentials: true})
            if(response){setIsloading(false)}
            //
            
            const loginresponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,formdata,{withCredentials: true})
            if(loginresponse?.status === 201){router.push("/home/feed")}
        }catch(err:any){setError(err?.response?.data?.Message)
            if(err){setIsloading(false)}
        }
    }


return (
<div className={styles.screen}>
<div className={styles.card}>
<h1 className={styles.heading}>Stillshare</h1>
<form className={styles.form} onSubmit={handlesubmit}>
<input className={styles.input} type="text" name="username" placeholder="Username" value={username} onChange={((e)=> setUsername(e.target.value))} onInput={()=>setError("")} />
<input className={styles.input} type="email" name="email" placeholder="Email" value={email} onChange={((e)=> setEmail(e.target.value))} />
<input className={styles.input} type="password" name="password" placeholder="Password" value={password} onChange={((e)=>setPassword(e.target.value))}/>
<button className={styles.submit} type="submit">Sign up</button>
</form>
<p className={styles.label}>Already have an account?</p>
<a className={styles.link} href="/auth/login">login</a>
</div>
{error && <p className={styles.errormessage} >{error}</p>}
{isloading && <p className={styles.errormessage}>Signing you up...</p>}
</div>
);
}
export default SignupForm;