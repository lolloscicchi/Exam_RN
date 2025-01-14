import { Button, Text, View } from 'react-native';
import { memo } from 'react';
import { MainParamList, Screen } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Home>;
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{'HOME SCREEN'}</Text>
      <Button
        title={'Go to Details'}
        onPress={() => {
          navigation.navigate(Screen.Detail);
        }}
      />
    </View>
  );
};
export default memo(HomeScreen);
