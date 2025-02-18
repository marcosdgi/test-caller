import {  Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);



  return (
    <>
      <StatusBar style="auto" />
      <Slot />
    </>
  );
}
