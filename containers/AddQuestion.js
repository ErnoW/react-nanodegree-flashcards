import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AddQuestion extends Component {
  static navigationOptions = {
    title: 'New Question',
  }

  render() {
    return (
      <View>
        <Text>AddQuestion</Text>
      </View>
    )
  }
}

export default AddQuestion
