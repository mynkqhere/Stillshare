import {View, Text} from 'react-native';
import LoginForm from '../components/login-form';
function Login(){
    return(
        <View>
            <Text>Welcome to Login</Text>
            <LoginForm/>
        </View>
    )
}
export default Login;