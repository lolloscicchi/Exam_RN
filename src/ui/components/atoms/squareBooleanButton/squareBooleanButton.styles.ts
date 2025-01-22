import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors.theme';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 12,
  },
  activeButton: { backgroundColor: COLORS.primary, borderWidth: 1, borderColor: COLORS.secondary },
  activeIcon: { color: COLORS.secondary },
  disableButton: { backgroundColor: COLORS.secondary, borderWidth: 1, borderColor: COLORS.primary },
  disableIcon: { color: COLORS.primary },
});
