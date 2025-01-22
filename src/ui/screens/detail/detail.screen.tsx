import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
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

// CHIAVE API PER LA RIMOZIONE DELLO SFONDO: svvRP8YKsw9VdymyRtC6mvuy

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
  const [image, setImage] = useState(product.image);
  const { favoriteIds, updateFavoriteIds, loadFavorites } = useProducts();
  // ** CALLBACKS ** //

  const removeBackground = async () => {
    try {
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'svvRP8YKsw9VdymyRtC6mvuy', // Sostituisci con la tua chiave API
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_url: image, // Invia l'URL dell'immagine
          size: 'auto', // Opzionale: specifica la dimensione dell'output
        }),
      });

      if (!response.ok) {
        throw new Error('Errore durante la richiesta');
      }

      // Converti la risposta in un blob
      const blob = await response.blob();

      // Converti il blob in un URL per visualizzare l'immagine
      const imageUrlWithBackgroundRemoved = URL.createObjectURL(blob);
      setImage(imageUrlWithBackgroundRemoved);
    } catch (error) {
      console.error('Errore durante la rimozione dello sfondo:', error);
      Alert.alert('Errore', 'Si è verificato un errore durante la rimozione dello sfondo.');
    }
  };

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
    removeBackground();
  }, [image, loadFavorites]);

  // ** UI ** //

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: image }} style={styles.productImage} />

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
