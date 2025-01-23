// In App.js in a new project

import React from 'react';
import RootStack from './src/ui/navigation/root.stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from './src/ui/theme/colors.theme';
import { styles } from './App.styles';

export default function App() {
  StatusBar.setBackgroundColor(COLORS.primary);
  StatusBar.setBarStyle('light-content');

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}
