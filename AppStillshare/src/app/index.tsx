import {View, Text, TouchableOpacity} from 'react-native';
import {router} from 'expo-router';
function Home(){
  return(
    <View>
      <Text>Welcome you successfully reached to Stillshare home</Text>
      <TouchableOpacity onPress={()=> router.push('/signup')}>
        <Text>Click here to go to signup page</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Home;
 