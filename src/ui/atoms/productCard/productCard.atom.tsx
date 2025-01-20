import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './productCard.styles';
import { Product } from '../../models/product.model';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProductCard = ({ product }: Product) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageButtonContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Ionicons name={'bookmark'} size={40} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={'bookmark-outline'} size={40} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        <Text style={styles.rating}>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
