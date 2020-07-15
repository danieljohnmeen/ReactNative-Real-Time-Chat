import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export default function FormInput({ labelName, theme, ...props }) {
  return (
    <TextInput
      {...props}
      label={labelName}
      style={styles(theme.colors).input}
      keyboardAppearance={theme.dark ? 'dark' : 'light'}
      numberOfLines={1}
    />
  );
}

const styles = (colors) =>
  StyleSheet.create({
    input: {
      marginTop: 10,
      marginBottom: 10,
      width: width / 1.5,
      height: height / 15,
      backgroundColor: colors.inputBackground,
    },
  });
