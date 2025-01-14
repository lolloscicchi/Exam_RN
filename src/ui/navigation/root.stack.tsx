import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainParamList, Screen } from './types';
import TabNavigator from './tab/tab.navigator';
import DetailScreen from '../screens/detail/detail.screen';

const Stack = createNativeStackNavigator<MainParamList>(); //viene creato lo stack dove verranno depositate tutte le schermate
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
        <Stack.Screen name={Screen.Detail} component={DetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default RootStack;
