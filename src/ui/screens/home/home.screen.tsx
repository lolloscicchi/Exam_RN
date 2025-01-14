import { Button, Text, View } from 'react-native';
import { memo } from 'react';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{'HOME SCREEN'}</Text>
      <Button title={'Go to Favorites'} />
    </View>
  );
};
export default memo(HomeScreen);
