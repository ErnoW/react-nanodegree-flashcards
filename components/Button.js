import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import * as theme from '../utils/theme'

const Button = ({ children, onPress, type = 'blank' }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: theme.space.m,
    backgroundColor: theme.color.primary,
    // alignSelf: 'center',
    borderRadius: theme.border.radius.m,
    marginBottom: theme.space.m,
  },
  buttonText: {
    color: theme.color.light,
    fontSize: theme.font.size.m,
    textAlign: 'center',
  },
})

export default Button
