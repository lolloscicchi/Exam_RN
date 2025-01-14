import { Button, Text, View } from 'react-native';
import { memo } from 'react';

const DetailScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{'DETAIL SCREEN'}</Text>
      <Button title={'Go back'} />
    </View>
  );
};
export default memo(DetailScreen);
