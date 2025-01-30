import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors.theme';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  productImage: {
    flex: 1,
    width: windowWidth * 0.9,
    resizeMode: 'contain',
  },
});
