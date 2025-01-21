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
      <SquareBooleanButton iconName={'arrow-up'} isActive={false} onPress={() => {}} />
      <SquareBooleanButton iconName={'arrow-down'} isActive={false} onPress={() => {}} />
      <SquareBooleanButton iconName={'reload'} isActive={false} onPress={() => {}} />
    </View>
  );
};

export default memo(FilterBar);
