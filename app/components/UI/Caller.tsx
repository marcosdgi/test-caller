import { useUser } from "@/context/UserContext";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-native-sdk";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function Caller() {
  const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY as string;
  const router = useRouter();
  const { token, user } = useUser();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<any>(null);
  const [isCalling, setIsCalling] = useState<boolean>(false);

  if (!user || !token) {
    router.replace("/screens/auth/login");
    return null;
  }

  useEffect(() => {
    const userId = { id: user.id } as User;
    const videoClient = new StreamVideoClient({
      apiKey,
      user: userId,
      token,
    });
    setClient(videoClient);

    const callInstance = videoClient.call("default", "my-call-id");
    setCall(callInstance);

    return () => {
      videoClient.disconnectUser();
    };
  }, [user.id, token]);

  const handleStartCall = async () => {
    if (call) {
      await call.join({ create: true });
      setIsCalling(true);
    }
  };

  if (!client || !call) return null;

  return (
    <View>
      {isCalling && (
        <StreamVideo client={client}>
          <StreamCall call={call}>
            <View>
              <Text>Calling</Text>
            </View>
          </StreamCall>
        </StreamVideo>
      )}
      <Pressable className="bg-blue-300 p-3" onPress={handleStartCall}>
        <Text>Start Call</Text>
      </Pressable>
    </View>
  );
}
