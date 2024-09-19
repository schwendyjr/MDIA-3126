import { Text } from 'react-native';
import { Link } from 'expo-router';
import { View } from 'react-native';


export default function Page() {
  return (
    <View>
        <Text>this is the ceasar salad page</Text>
        <Link href="/sandwich">link to sandhwich page</Link>    
    </View>
  ) 
}
