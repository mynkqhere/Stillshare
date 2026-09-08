import axios from "axios";
import {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {BACKEND_API_URL} from '@env'
import { router } from "expo-router";
function SignupForm(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    
    async function handleSignup(){
        // handle signup logic here
        const formdata = {
            username: username,
            email: email,
            password: password
        }
        console.log(formdata.username, formdata.email, formdata.password) // testing purpose
        try{
        const response = await axios.post(`${BACKEND_API_URL}/api/auth/register`, formdata, {withCredentials: true});
        if(response.status===201){router.push('/')}
        }catch(error){
            console.error("Failed to register user:", error.Message);
        }

    }
    
    return(
        <View>
            <Text>Stillshare</Text>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword}/>
            <TouchableOpacity onPress={handleSignup}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SignupForm;