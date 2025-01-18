import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './productCard.styles';
import { Product } from '../../hook/useProducts.facade';

const ProductCard = ({ product }: Product) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.price}>${product.price.toFixed(2)}</Text>

      <Text style={styles.description}>{product.description}</Text>

      <Text style={styles.rating}>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </Text>
    </View>
  );
};

export default ProductCard;
