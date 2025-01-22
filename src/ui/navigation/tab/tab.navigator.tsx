import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParams, Screen } from '../types';
import HomeScreen from '../../screens/home/home.screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import FavoriteScreen from '../../screens/favorite/favorite.screen';
import { COLORS } from '../../theme/colors.theme';

const Tab = createBottomTabNavigator<TabParams>();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
          },
          headerTitleStyle: {
            color: COLORS.secondary,
          },
          tabBarStyle: {
            height: 60,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'space-around',
          },
          tabBarIcon: ({ focused }) => {
            const iconName = () => {
              switch (route.name) {
                case Screen.Home:
                  return 'home';
                case Screen.Favorite:
                  return 'bookmark';
              }
            };
            return (
              <Ionicons
                name={iconName()}
                size={35}
                color={focused ? COLORS.secondary : COLORS.lightGrey}
              />
            );
          },
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: 'gray',
          tabBarIconStyle: {
            height: 35,
            width: 35,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 300,
          },
        };
      }}>
      <Tab.Screen name={Screen.Home} component={HomeScreen} />
      <Tab.Screen name={Screen.Favorite} component={FavoriteScreen} />
    </Tab.Navigator>
  );
}
