import { ScreenContent } from "components/ScreenContent";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View>
            <Text className="text-2xl font-bold mb-4">Home</Text>
            <Link href="/about">About</Link>
        </View>
    )
}