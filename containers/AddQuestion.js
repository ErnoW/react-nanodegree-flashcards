import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import * as theme from '../utils/theme'

class AddQuestion extends Component {
  static navigationOptions = {
    title: 'New Question',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AddQuestion</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: theme.space.m,
    backgroundColor: theme.color.light,
  },
})

export default AddQuestion
