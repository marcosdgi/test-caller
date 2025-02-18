import { useRouter } from "expo-router";
import { useState } from "react";
import { StatusBar, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function SplashScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(true);


    if (isLoading) {
        return (
            <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }} className="h-full flex flex-col">
                <StatusBar />
                <View className="flex flex-1 flex-col justify-center items-center h-[100%]">
                    <Text className="bg-purple-700 rounded p-4 text-white text-3xl">LISN</Text>
                </View>
            </View>
        );
    }


}