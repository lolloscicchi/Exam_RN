import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors.theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginHorizontal: 8,
    borderRadius: 16,
  },
  textStyle: { fontSize: 16 },
  activeButton: { backgroundColor: COLORS.primary, borderWidth: 1, borderColor: COLORS.secondary },
  activeText: { color: COLORS.secondary },
  disableButton: { backgroundColor: COLORS.secondary, borderWidth: 1, borderColor: COLORS.primary },
  disableText: { color: COLORS.primary },
});
