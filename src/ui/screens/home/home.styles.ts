import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors.theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 12,
  },
  itemSeparatorComponent: { height: 20 },
  noProductsContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  noProductsText: { justifyContent: 'center', fontSize: 20, color: COLORS.primary },
});
