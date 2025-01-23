import { CategoryType } from '../../../models/product.model';
import BasicBooleanButton from '../../atoms/basicBooleanButton/basicBooleanButton.atom';
import { ScrollView, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { styles } from './categoriesFilter.styles';

interface CategoriesFilterProps {
  selectedCategory: CategoryType;
  categories: CategoryType[];
  onPress: (item: CategoryType) => void;
}

export const CategoriesFilter = ({
  selectedCategory,
  categories,
  onPress,
}: CategoriesFilterProps) => {
  const renderItem = useCallback(
    (item: CategoryType) => {
      return (
        <BasicBooleanButton
          title={item}
          isActive={selectedCategory === item}
          onPress={() => onPress(item)}
        />
      );
    },
    [onPress, selectedCategory]
  );
  return (
    <View>
      <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((item: CategoryType) => renderItem(item))}
      </ScrollView>
    </View>
  );
};
export default memo(CategoriesFilter);
