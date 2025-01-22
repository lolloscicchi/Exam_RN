import React, { memo } from 'react';
import { View } from 'react-native';
import SquareBooleanButton from '../../atoms/squareBooleanButton/squareBooleanButton.atom';

interface FilterBarProps {
  onAscendent: () => void;
  onDiscendent: () => void;
  onReset: () => void;
}

const FilterBar = ({ onAscendent, onReset, onDiscendent }: FilterBarProps) => {
  return (
    <View style={{ marginVertical: 8, flexDirection: 'row', justifyContent: 'space-around' }}>
      <SquareBooleanButton iconName={'arrow-down'} isActive={false} onPress={onAscendent} />
      <SquareBooleanButton iconName={'arrow-up'} isActive={false} onPress={onDiscendent} />
      <SquareBooleanButton iconName={'reload'} isActive={false} onPress={onReset} />
    </View>
  );
};

export default memo(FilterBar);
