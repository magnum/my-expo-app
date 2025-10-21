import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function About() {
    return (
        <View>
            <Text className="text-2xl font-bold mb-4">About me</Text>
            <Link href="/">Home</Link>
        </View>
    )
}