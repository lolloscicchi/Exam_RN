import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { memo } from 'react';
import { useProducts } from '../../hook/useProducts.facade';
import ProductCard from '../../atoms/productCard/productCard.atom';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import { Product } from '../../models/product.model';
import { styles } from '../home/home.styles';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Favorite>;
}

const FavoriteScreen = ({ navigation }: Props) => {
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
          openProduct={() => {
            if (!item.id) return;
            navigation.navigate(Screen.Detail, {
              id: item.id,
            });
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

  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.itemSeparatorComponent}></View>,
    []
  );
  // ** USE EFFECTS ** //

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refreshProducts();
      loadFavorites();
      console.log(navigation);
    });
    return unsubscribe;
  }, [favoriteIds, loadFavorites, navigation, refreshProducts]);

  // ** UI ** //

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={products.filter((product) => favoriteIds.includes(product.id))}
        renderItem={renderItem}
      />
    </View>
  );
};
export default memo(FavoriteScreen);
