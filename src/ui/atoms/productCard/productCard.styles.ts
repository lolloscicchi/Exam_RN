import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#f3f6f0',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
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
    color: '#2ecc71',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  detailButton: {
    marginTop: 4,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#899e89',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  detailButtonText: { color: '#f3f6f0', fontSize: 16 },
});
