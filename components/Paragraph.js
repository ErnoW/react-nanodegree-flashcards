import React from 'react'
import { Text, StyleSheet } from 'react-native'

import * as theme from '../utils/theme'

const Paragraph = ({ children }) => {
  return <Text style={styles.paragraph}>{children}</Text>
}

const styles = StyleSheet.create({
  paragraph: {
    marginBottom: theme.space.m,
  },
})

export default Paragraph
