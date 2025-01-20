import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList } from '../../navigation/types';
import { RouteProp } from '@react-navigation/native';
import { Product } from '../../models/product.model';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './detail.styles';
import { useProducts } from '../../hook/useProducts.facade';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Detail>;
  route: RouteProp<MainParamList, Screen.Detail>;
}

const DetailScreen = ({ navigation, route }: Props) => {
  const { id } = route.params;
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const { favoriteIds, updateFavoriteIds, loadFavorites } = useProducts();
  // ** CALLBACKS ** //
  // ** USE EFFECT ** //
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((response: Product) => {
        setProduct(response);
      });
    console.log(product);
  }, [id, product]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  // ** UI ** //

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />

      <View style={styles.titleIsFavoriteContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <TouchableOpacity onPress={() => updateFavoriteIds(product)}>
          <Ionicons
            name={favoriteIds.includes(product.id) ? 'bookmark' : 'bookmark-outline'}
            size={35}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>Category: {product.category}</Text>
          <Text style={styles.metaText}>Price: ${product.price.toFixed(2)}</Text>
          <Text style={styles.metaText}>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={20} color="#fff" />
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailScreen;
