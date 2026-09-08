import {router} from 'expo-router';
import {View, Text, TouchableOpacity} from 'react-native';
function Home(){
  return(
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={()=>router.push('/signup')}>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> router.push('/login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )

}
export default Home;
 