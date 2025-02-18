import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Layout = () => {
    const insets = useSafeAreaInsets()
    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <Stack>
                <Stack.Screen name='index' />
            </Stack>
        </View>
    );
};


export default Layout;