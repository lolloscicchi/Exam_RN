import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput, View } from 'react-native';
import React, { memo } from 'react';
import { styles } from './searchBar.styles';

interface SearchBarProps {
  text: string;
  onSearch: (inputText: string) => void;
}

const SearchBar = ({ text, onSearch }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name={'search'} style={styles.searchIcon} size={24} />
      <TextInput
        style={styles.textInput}
        placeholder={'Search'}
        keyboardType={'default'}
        multiline={false}
        maxLength={50}
        value={text}
        onChangeText={onSearch}
      />
    </View>
  );
};

export default memo(SearchBar);
