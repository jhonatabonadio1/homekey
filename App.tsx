import React from 'react';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components'

import theme from './src/global/styles/theme'

import { 
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
 } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

