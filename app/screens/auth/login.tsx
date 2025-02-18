import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { IconDownload, IconPlus } from '@tabler/icons-react-native'
const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
            <View className="w-4/5 p-4 bg-white rounded-lg shadow-md">
                <Text className="text-2xl font-bold text-center text-purple-950 mb-4">Inicie sesión</Text>
                <View className="mb-3">
                    <Text className="text-sm font-medium mb-1">Email</Text>
                    <TextInput
                        className="h-10 border border-gray-300 rounded px-2 text-purple-950"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View className="mb-3">
                    <Text className="text-sm text-purple-950 font-medium mb-1">Password</Text>
                    <TextInput
                        className="h-10 border border-gray-300 rounded px-2"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity className='w-full flex-row justify-center items-center gap-x-2 rounded-md bg-purple-600 p-3 mt-10' onPress={handleLogin}>
                    <IconDownload color={'white'}/>
                    <Text className='text-center text-white'>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;
