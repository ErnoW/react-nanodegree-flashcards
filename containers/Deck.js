import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import * as theme from '../utils/theme'

import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

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
      <View style={styles.container}>
        <Text>Cards: {deck.questions.length}</Text>

        {deck.questions.length > 0 ? (
          <ButtonGroup>
            <Button onPress={() => this.props.navigation.navigate('AddQuestion', { deck: deck })}>
              Add new Card
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Quiz', { deck: deck })}>
              Start quiz
            </Button>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <Button onPress={() => this.props.navigation.navigate('AddQuestion', { deck: deck })}>
              Add new Card
            </Button>
          </ButtonGroup>
        )}
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

export default Deck
