import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors.theme';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    padding: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mainItemCard: { flexDirection: 'row' },
  imageButtonContainer: {
    flex: 2,
    justifyContent: 'space-between',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 10,
    width: 128,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textContainer: { flex: 3, resizeMode: 'contain' },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: COLORS.greenPrice,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: COLORS.darkGrey,
    marginBottom: 8,
  },
  ratingContainer: { flexDirection: 'row', alignItems: 'center' },
  rating: {
    fontSize: 14,
    color: COLORS.lightGrey,
  },
  detailButton: {
    marginTop: 4,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  detailButtonText: { color: COLORS.secondary, fontSize: 16 },
});
