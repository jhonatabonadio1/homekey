import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { Home } from '../screens/Home';

import {Feather} from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarShowLabel: true,

      }}
    >
      <Screen
        name="Initial"
        component={Home}
        options={{
          tabBarLabel: "Buscar",
          tabBarIcon: ({ color }) => (
            <Feather name="home" width={24} size={24} color={color} />
          ),
        }}
      />
       <Screen
        name="Favourites"
        component={Home}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Feather name="heart" width={24} size={24} color={color} />
          ),
        }}
      />
       <Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color }) => (
            <Feather name="message-circle" width={24} size={24} color={color} />
          ),
        }}
      />
       <Screen
        name="Account"
        component={Home}
        options={{
          tabBarLabel: "Conta",
          tabBarIcon: ({ color }) => (
            <Feather name="user" width={24} size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}