import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors.theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
  },
  searchIcon: {
    flex: 1,
    paddingRight: 10,
  },
  textInput: {
    flex: 10,
    fontSize: 20,
  },
});
