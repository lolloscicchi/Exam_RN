import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors.theme';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  titleIsFavoriteContainer: { flexDirection: 'row', alignItems: 'center' },
  arrowButtonContainer: { flex: 1 },
  title: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 16,
  },
  headerContainer: { flexDirection: 'row' },
  productImage: {
    flex: 5,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  detailsContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    padding: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  description: {
    fontSize: 16,
    color: COLORS.darkGrey,
    lineHeight: 24,
    marginBottom: 16,
  },
  metaContainer: {
    marginTop: 8,
  },
  metaText: {
    fontSize: 14,
    color: COLORS.lightGrey,
    marginBottom: 8,
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  goBackButtonText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
