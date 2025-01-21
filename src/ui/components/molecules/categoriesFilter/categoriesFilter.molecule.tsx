import { Categories } from '../../../models/product.model';
import BasicBooleanButton from '../../atoms/basicBooleanButton/basicBooleanButton.atom';
import { ScrollView } from 'react-native';
import React, { memo } from 'react';
import { styles } from './categoriesFilter.styles';

interface CategoriesFilterProps {
  selectedCategories: Categories;
  category1: { title: string; function: () => void };
  category2: { title: string; function: () => void };
  category3: { title: string; function: () => void };
  category4: { title: string; function: () => void };
}

export const CategoriesFilter = ({
  selectedCategories,
  category1,
  category2,
  category3,
  category4,
}: CategoriesFilterProps) => {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <BasicBooleanButton
        title={category1.title}
        isActive={selectedCategories === category1.title}
        onPress={category1.function}
      />
      <BasicBooleanButton
        title={category2.title}
        isActive={selectedCategories === category2.title}
        onPress={category2.function}
      />
      <BasicBooleanButton
        title={category3.title}
        isActive={selectedCategories === category3.title}
        onPress={category3.function}
      />
      <BasicBooleanButton
        title={category4.title}
        isActive={selectedCategories === category4.title}
        onPress={category4.function}
      />
    </ScrollView>
  );
};
export default memo(CategoriesFilter);
