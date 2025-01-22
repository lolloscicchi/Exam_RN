import React, { memo } from 'react';
import { View } from 'react-native';
import SquareBooleanButton from '../../atoms/squareBooleanButton/squareBooleanButton.atom';
import { SortingType } from '../../../models/product.model';

interface FilterBarProps {
  sortingType: SortingType;
  onAscendent: () => void;
  onDiscendent: () => void;
  onReset: () => void;
}

const FilterBar = ({ onAscendent, onReset, onDiscendent, sortingType }: FilterBarProps) => {
  return (
    <View style={{ marginVertical: 8, flexDirection: 'row', justifyContent: 'space-around' }}>
      <SquareBooleanButton
        iconName={'arrow-down'}
        isActive={sortingType === SortingType.ASCENDENT}
        onPress={onAscendent}
      />
      <SquareBooleanButton
        iconName={'arrow-up'}
        isActive={sortingType === SortingType.DISCENDENT}
        onPress={onDiscendent}
      />
      <SquareBooleanButton iconName={'reload'} isActive={false} onPress={onReset} />
    </View>
  );
};

export default memo(FilterBar);
