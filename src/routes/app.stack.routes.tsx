import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen, Group } = createNativeStackNavigator();

import { AppTabRoutes } from './app.tab.routes';
import { SingleAnnounce } from '../screens/SingleAnnounce';

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={AppTabRoutes} />
      <Screen name="SingleAnnounce" component={SingleAnnounce} />
    </Navigator>
  );
}