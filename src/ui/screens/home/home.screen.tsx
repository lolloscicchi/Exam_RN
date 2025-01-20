import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { MainParamList, Screen } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useProducts } from '../../hook/useProducts.facade';
import ProductCard from '../../components/atoms/productCard/productCard.atom';
import { styles } from './home.styles';
import { Categories, Product } from '../../models/product.model';
import { CategoriesFilter } from '../../components/molecules/categoriesFilter/categoriesFilter.molecule';

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
      <CategoriesFilter selectedCategories={Categories.MEN_CLOTHING} />
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
