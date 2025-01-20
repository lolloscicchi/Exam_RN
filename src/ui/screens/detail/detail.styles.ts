import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#c0ddd1',
    padding: 16,
  },
  titleIsFavoriteContainer: { flexDirection: 'row', alignItems: 'center' },
  title: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  detailsContainer: {
    backgroundColor: '#f3f6f0',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 16,
  },
  metaContainer: {
    marginTop: 8,
  },
  metaText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#899e89',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  goBackButtonText: {
    color: '#f3f6f0',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
