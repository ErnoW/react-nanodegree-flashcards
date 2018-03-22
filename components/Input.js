import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import * as theme from '../utils/theme'

const Input = ({ onChangeText, value, placeholder, label }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.space.m,
  },
  input: {
    borderBottomWidth: theme.border.width.m,
    padding: theme.space.s,
    borderColor: theme.color.grey,
  },
  label: {
    fontSize: theme.font.size.m,
    color: theme.color.grey,
  },
})

export default Input
