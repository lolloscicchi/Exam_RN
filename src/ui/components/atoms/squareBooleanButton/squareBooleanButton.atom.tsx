import { TouchableOpacity, View } from 'react-native';
import React, { memo } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../theme/colors.theme';
import { styles } from './squareBooleanButton.styles';

interface SquareBooleanButtonProps {
  iconName: string;
  isActive: boolean;
  size?: number;
  onPress: () => void;
}

const SquareBooleanButton = ({ isActive, iconName, size, onPress }: SquareBooleanButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, isActive ? styles.activeButton : styles.disableButton]}>
        <Ionicons
          name={iconName ?? 'alert-circle'}
          size={size ?? 24}
          color={COLORS.secondary}
          style={isActive ? styles.activeIcon : styles.disableIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(SquareBooleanButton);
