// In App.js in a new project

import React from 'react';
import RootStack from './src/ui/navigation/root.stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}
