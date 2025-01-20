import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { MainParamList, Screen } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useProducts } from '../../hook/useProducts.facade';
import ProductCard from '../../atoms/productCard/productCard.atom';
import { styles } from './home.styles';
import { Product } from '../../models/product.model';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Home>;
}

const HomeScreen = ({ navigation }: Props) => {
  const {
    products,
    setProducts,
    favoriteIds,
    setFavoriteIds,
    refreshProducts,
    loadFavorites,
    updateFavoriteIds,
  } = useProducts();

  // ** CALLBACKS ** //

  const renderItem = useCallback<ListRenderItem<Product>>(
    ({ item }) => {
      return (
        <ProductCard
          product={item}
          openCart={function (): void {
            throw new Error('Function not implemented.');
          }}
          isFavorite={favoriteIds.includes(item.id)}
          switchFavorite={() => {
            updateFavoriteIds(item);
          }}
        />
      );
    },
    [favoriteIds, updateFavoriteIds]
  );

  const ItemSeparatorComponent = useCallback(() => <View style={{ height: 20 }}></View>, []);

  // ** USE EFFECTS ** //

  useEffect(() => {
    refreshProducts();
    loadFavorites();
    console.log(favoriteIds);
  }, [favoriteIds, loadFavorites, refreshProducts]);

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
