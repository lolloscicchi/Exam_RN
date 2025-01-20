import { Text, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { styles } from './basicBooleanButton.styles';

interface basicBooleanButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

const BasicBooleanButton = ({ isActive, title, onPress }: basicBooleanButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isActive ? styles.activeButton : styles.disableButton]}>
      <Text style={[styles.textStyle, isActive ? styles.activeText : styles.disableText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(BasicBooleanButton);
