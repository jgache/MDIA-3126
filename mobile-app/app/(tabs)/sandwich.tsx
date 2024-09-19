import { Text,View } from 'react-native';
import { Link } from "expo-router";


export default function Page() {
  return (
    <View>
    <Text>This is the sandwich page 🥪</Text>
    <Link href="/bigway">Give me that juicy juicy biway page</Link>
  </View>
  )
}


