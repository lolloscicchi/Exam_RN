import { Button, Text, View } from 'react-native';
import { memo } from 'react';

const FavoriteScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{'FAVORITE SCREEN'}</Text>
      <Button title={'Go to Home'} />
    </View>
  );
};
export default memo(FavoriteScreen);
