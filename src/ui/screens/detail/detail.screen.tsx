import { Button, Text, View } from 'react-native';
import { memo } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList } from '../../navigation/types';
import { Screen } from 'react-native-screens';
import { RouteProp } from '@react-navigation/native';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Detail>;
  route: RouteProp<MainParamList, Screen.Detail>;
}

const DetailScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{'DETAIL SCREEN'}</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
    </View>
  );
};
export default memo(DetailScreen);
