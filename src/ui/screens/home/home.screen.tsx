import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { MainParamList, Screen } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product, useProducts } from '../../hook/useProducts.facade';
import ProductCard from '../../atoms/productCard/productCard.atom';
import { styles } from './home.styles';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Home>;
}

const HomeScreen = ({ navigation }: Props) => {
  const { products, setProducts, refreshProducts } = useProducts();

  // ** CALLBACKS ** //

  const renderItem = useCallback<ListRenderItem<Product>>(({ item }) => {
    return <ProductCard product={item} />;
  }, []);

  const ItemSeparatorComponent = useCallback(() => <View style={{ height: 20 }}></View>, []);

  // ** USE EFFECTS ** //

  useEffect(() => {
    refreshProducts();
  }, [refreshProducts]);

  // ** UI ** //

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={products}
        renderItem={renderItem}
      />
    </View>
  );
};
export default HomeScreen;
