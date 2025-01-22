import { TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../theme/colors.theme';
import { styles } from './squareBooleanButton.styles';

interface SquareBooleanButtonProps {
  iconName: string;
  isActive: boolean;
  onPress: () => void;
}

const SquareBooleanButton = ({ isActive, iconName, onPress }: SquareBooleanButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isActive ? styles.activeButton : styles.disableButton]}>
      <Ionicons
        name={iconName}
        size={24}
        color={COLORS.secondary}
        style={isActive ? styles.activeIcon : styles.disableIcon}
      />
    </TouchableOpacity>
  );
};

export default memo(SquareBooleanButton);
