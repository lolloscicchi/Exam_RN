import React, { useCallback, useEffect } from 'react';
import { Button, FlatList, ListRenderItem, Text, View } from 'react-native';
import { memo } from 'react';
import { MainParamList, Screen } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product, useProducts } from '../../hook/useProducts.facade';
import ProductCard from '../../atoms/productCard/productCard.atom';

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
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>{'HOME SCREEN'}</Text>
        <Button
          title={'Go to Details'}
          onPress={() => {
            navigation.navigate(Screen.Detail);
          }}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={products}
        renderItem={renderItem}
      />
    </View>
  );
};
export default memo(HomeScreen);
