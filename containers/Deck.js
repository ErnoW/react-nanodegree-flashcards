import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
      title: `Deck: ${deck.title}`,
    }
  }

  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View>
        <Text>Cards: {deck.questions.length}</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('AddQuestion', { deck: deck })
          }
        >
          <Text>Add new Card</Text>
        </TouchableOpacity>
        {deck.questions.length > 0 && (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Quiz', { deck: deck })
            }
          >
            <Text>Start quiz</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

export default Deck
