import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
    const insets = useSafeAreaInsets()
    return (
        <>
            <StatusBar />
            <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1 }}>
                <Stack>
                    <Stack.Screen name='login' options={{headerShown:false}}/>
                </Stack>
            </View>

        </>
    );
};


export default AuthLayout;