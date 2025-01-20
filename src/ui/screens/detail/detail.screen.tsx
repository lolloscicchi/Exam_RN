import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList } from '../../navigation/types';
import { Screen } from 'react-native-screens';
import { RouteProp } from '@react-navigation/native';
import { Product } from '../../models/product.model';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Detail>;
  route: RouteProp<MainParamList, Screen.Detail>;
}

const DetailScreen = ({ navigation, route }: Props) => {
  const { id } = route.params;
  const [product, setProduct] = useState<Product>();
  // ** CALLBACKS ** //
  // ** USE EFFECT ** //
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((response: Product) => setProduct(response));
  }, [id]);

  // ** UI ** //

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>{product?.title}</Text>
      <Text>{product?.category}</Text>
      <Text>{product?.description}</Text>
      <Button title={'go back'} onPress={() => navigation.goBack()} />
    </View>
  );
};
export default DetailScreen;
