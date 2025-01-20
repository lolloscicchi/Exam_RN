import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './productCard.styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Product } from '../../../models/product.model';

interface ProductCardProps {
  product: Product;
  openProduct: () => void;
  isFavorite: boolean;
  isOnCart?: boolean;
  switchFavorite: () => void;
}
const ProductCard = ({
  product,
  openProduct,
  isFavorite,
  isOnCart,
  switchFavorite,
}: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.mainItemCard}>
        <View style={styles.imageButtonContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Ionicons
                name={isOnCart ? 'cart' : 'cart-outline'}
                size={40}
                color={isOnCart ? 'black' : 'grey'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={switchFavorite}>
              <Ionicons
                name={isFavorite ? 'bookmark' : 'bookmark-outline'}
                size={40}
                color={isFavorite ? 'black' : 'grey'}
              />
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
      <TouchableOpacity onPress={openProduct} style={styles.detailButton} activeOpacity={0.5}>
        <Text style={styles.detailButtonText}>{'Detail Page'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(ProductCard);
