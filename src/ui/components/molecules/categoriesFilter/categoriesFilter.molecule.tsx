import { Categories } from '../../../models/product.model';
import BasicBooleanButton from '../../atoms/basicBooleanButton/basicBooleanButton.atom';
import { ScrollView } from 'react-native';
import React, { memo, useState } from 'react';
import { styles } from './categoriesFilter.styles';

interface CategoriesFilterProps {
  selectedCategories: Categories;
}

export const CategoriesFilter = ({ selectedCategories }: CategoriesFilterProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <BasicBooleanButton
        title={Categories.MEN_CLOTHING}
        isActive={true}
        onPress={() => {
          setIsActive((prev) => !prev);
        }}
      />
      <BasicBooleanButton
        title={Categories.WOMEN_CLOTHINS}
        isActive={isActive}
        onPress={() => {
          setIsActive((prev) => !prev);
        }}
      />
      <BasicBooleanButton
        title={Categories.ELECTRONICS}
        isActive={isActive}
        onPress={() => {
          setIsActive((prev) => !prev);
        }}
      />
      <BasicBooleanButton
        title={Categories.JEWELERY}
        isActive={isActive}
        onPress={() => {
          setIsActive((prev) => !prev);
        }}
      />
    </ScrollView>
  );
};
export default memo(CategoriesFilter);
