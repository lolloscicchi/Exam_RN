import { Categories, CategoryType } from '../../../models/product.model';
import BasicBooleanButton from '../../atoms/basicBooleanButton/basicBooleanButton.atom';
import { ScrollView } from 'react-native';
import React, { memo, useCallback } from 'react';
import { styles } from './categoriesFilter.styles';

interface CategoriesFilterProps {
  selectedCategory: CategoryType;
  categories: Categories[];
  onPress: (item: CategoryType) => void;
}

export const CategoriesFilter = ({
  selectedCategory,
  categories,
  onPress,
}: CategoriesFilterProps) => {
  const renderItem = useCallback(
    (item: Categories) => {
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
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((item: Categories) => renderItem(item))}
    </ScrollView>
  );
};
export default memo(CategoriesFilter);
