import axios from 'axios'
import {router} from 'expo-router'
import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import {BACKEND_API_URL} from '@env'

function LoginForm(){
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

async function handleLogin(){
const formdata = {
    username: username,
    email: email,
    password: password
}
console.log(formdata.username, formdata.email, formdata.password) // testing purpose only
try{
    const response = await axios.post(`${BACKEND_API_URL}/api/auth/login`,formdata, {withCredentials: true});
    console.log("Login Success") // for testing purpose only.
    if(response.status===201){router.push('/')}
}catch(error){
    console.error("Failed to Login:", error)
}
}
    return(
        <View>
            <Text>Stillshare</Text>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername}/>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword}/>
            <TouchableOpacity onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LoginForm;