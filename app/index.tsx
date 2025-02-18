import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
} from "@stream-io/video-react-native-sdk";
import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";

const apiKey = "9wxcr4vncmfn";
const userId = Math.random().toString(36).substring(2, 15);
function generateTokenForUser(userId: string): string {
    // This is a placeholder implementation. Replace with your actual token generation logic.
    return `token-${userId}-${new Date().getTime()}`;
}

const token = generateTokenForUser(userId);
const callId = "my-call-id";
const user: User = { id: userId };
const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("default", callId);
call.join({ create: true });
export default function App() {
    const [isCalling, setIsCalling] = useState<boolean>(false)
    return (
        <View>
            {isCalling && (
                <StreamVideo client={client}>
                    <StreamCall call={call}>
                        <View>
                            <Text>Callig</Text>
                        </View>
                    </StreamCall>
                </StreamVideo>)}
            <Pressable className="bg-blue-300 p-3z" onPress={() => setIsCalling(true)}>
                <Text>
                    Hello
                </Text>
            </Pressable>
        </View>
    );
}