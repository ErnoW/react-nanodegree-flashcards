import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AddDeck extends Component {
  static navigationOptions = {
    title: 'New Deck',
  }

  render() {
    return (
      <View>
        <Text>AddDeck</Text>
      </View>
    )
  }
}

export default AddDeck
