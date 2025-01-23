import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, View, TextInput, Text } from 'react-native';
import { MainParamList, Screen } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useProducts } from '../../hook/useProducts.facade';
import ProductCard from '../../components/atoms/productCard/productCard.atom';
import { styles } from './home.styles';
import { Product, SortingType } from '../../models/product.model';
import { CategoriesFilter } from '../../components/molecules/categoriesFilter/categoriesFilter.molecule';
import { COLORS } from '../../theme/colors.theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import FilterBar from '../../components/molecules/filterBar/filterBar.atom';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Home>;
}

const HomeScreen = ({ navigation }: Props) => {
  const {
    products,
    favoriteIds,
    category,
    categories,
    ratingSorting,
    refreshProducts,
    refreshCategories,
    loadFavorites,
    updateFavoriteIds,
    onCategoriesFilterApply,
    onRatingSortingApply,
    onSearch,
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
    [favoriteIds, navigation, updateFavoriteIds]
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
      refreshCategories();
      console.log(navigation);
    });
    return unsubscribe;
  }, [favoriteIds, loadFavorites, navigation, refreshCategories, refreshProducts]);

  // ** UI ** //

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.secondary,
          paddingVertical: 12,
          paddingHorizontal: 20,
          marginBottom: 12,
          borderRadius: 12,
        }}>
        <Ionicons
          name={'search'}
          style={{
            flex: 1,
            paddingHorizontal: 12,
          }}
          size={24}
        />
        <TextInput
          style={{
            flex: 10,
            fontSize: 20,
          }}
          placeholder={'Search'}
          keyboardType={'default'}
          multiline={false}
          maxLength={50}
          onChangeText={(item) => onSearch(item)}
        />
      </View>
      <View style={{ backgroundColor: 'transparent' }}>
        <CategoriesFilter
          selectedCategory={category}
          categories={categories}
          onPress={onCategoriesFilterApply}
        />
        <FilterBar
          onAscendent={() => {
            onRatingSortingApply(SortingType.ASCENDENT);
          }}
          onDiscendent={() => {
            onRatingSortingApply(SortingType.DISCENDENT);
          }}
          onReset={() => {
            onRatingSortingApply(SortingType.INITIAL);
          }}
          sortingType={ratingSorting}
        />
      </View>
      {products.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorComponent}
          data={products}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.noProductsContainer}>
          <Text style={styles.noProductsText}>{'No products found'}</Text>
        </View>
      )}
    </View>
  );
};
export default HomeScreen;
