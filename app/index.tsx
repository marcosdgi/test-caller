import { UserRespository } from "@/repository/auth/userRepository";
import { AuthService } from "@/services/auth/authService";
import { router, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar, View, Text, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const repository = new UserRespository(process.env.EXPO_PUBLIC_API_URL as string);
const service = new AuthService(repository);
export default function SplashScreen() {
    const insets = useSafeAreaInsets();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            service.users().then((users) => {
                console.log(users);

            })
            setIsLoading(false);
            router.replace('/screens/auth/login');
        }, 2000);

        return () => clearTimeout(timer);
    }, [])

    if (isLoading) {
        return (
            <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }} className="h-full flex flex-col">
                <StatusBar />
                <View className="flex flex-1 flex-col justify-center items-center h-[100%]">
                    <Text className="bg-purple-700 rounded p-4 text-white text-3xl">LISN</Text>
                    <ActivityIndicator color={'purple'} />
                </View>
            </View>
        );
    }


}