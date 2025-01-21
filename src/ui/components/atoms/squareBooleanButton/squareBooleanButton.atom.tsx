import { TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../theme/colors.theme';

interface SquareBooleanButtonProps {
  iconName: string;
  isActive: boolean;
  onPress: () => void;
}

const SquareBooleanButton = ({ isActive, iconName, onPress }: SquareBooleanButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name={iconName}
        size={24}
        color={COLORS.secondary}
        style={{
          padding: 8,
          backgroundColor: COLORS.primary,
          borderWidth: 1,
          borderColor: COLORS.secondary,
          borderRadius: 12,
        }}
      />
    </TouchableOpacity>
  );
};

export default memo(SquareBooleanButton);
