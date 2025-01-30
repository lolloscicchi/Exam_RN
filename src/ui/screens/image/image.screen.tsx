import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList } from '../../navigation/types';
import { RouteProp } from '@react-navigation/native';
import { View, Button, Image } from 'react-native';
import { styles } from './image.styles';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Image>;
  route: RouteProp<MainParamList, Screen.Image>;
}

const ImageScreen = ({ navigation, route }: Props) => {
  const { uri } = route.params;

  return (
    <View style={styles.container}>
      gestureHandlerRootHOC(
      <Image
        source={{
          uri: uri,
        }}
        style={styles.productImage}
      />
      )
      <Button title={'GO BACK'} onPress={() => navigation.goBack()} />
      {/*<Image source={{ uri: uri }} />*/}
    </View>
  );
};
export default ImageScreen;
