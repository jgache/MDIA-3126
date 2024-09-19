import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
      <Text>This is the bigway page 🥘</Text>
      <Link href="/sandwich">Give me that juicy juicy sandwich page</Link>
    </View>
  );
}
