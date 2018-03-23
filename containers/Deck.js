import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import * as theme from '../utils/theme'

import { getDeck } from '../actions'

import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    if (navigation.state.params != undefined) {
      return {
        title: `Deck: ${navigation.state.params.deckTitle}`,
      }
    }
  }

  componentDidMount() {
    this.props.getDeck(this.props.deck.id)

    this.props.navigation.setParams({
      deckTitle: this.props.deck.title,
    })
  }

  render() {
    const deck = this.props.deck

    return deck ? (
      <View style={styles.container}>
        <View style={styles.summary}>
          <Text>Deck name: {deck.title}</Text>
          <Text>Cards: {deck.questions.length}</Text>
        </View>

        {deck.questions.length > 0 ? (
          <ButtonGroup>
            <Button onPress={() => this.props.navigation.navigate('AddQuestion')}>
              Add new Card
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Quiz')}>Start quiz</Button>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <Button onPress={() => this.props.navigation.navigate('AddQuestion')}>
              Add new Card
            </Button>
          </ButtonGroup>
        )}
      </View>
    ) : (
      <View style={styles.container} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: theme.space.m,
    backgroundColor: theme.color.light,
  },
  summary: {
    marginBottom: theme.space.m,
  },
})

const mapStateToProps = (state) => ({
  deck: state.decks[state.currentDeck],
})

const mapDispatchToProps = {
  getDeck,
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck)
