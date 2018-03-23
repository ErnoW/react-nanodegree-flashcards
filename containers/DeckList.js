import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'

import * as theme from '../utils/theme'
import { getDecks, setDeck } from '../actions'

class DeckButton extends Component {
  state = {
    animatedValue: new Animated.Value(1),
  }

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.state.animatedValue, {
        duration: 150,
        toValue: 1.2,
      }),
      Animated.spring(this.state.animatedValue, {
        toValue: 1,
        friction: 5,
      }),
    ]).start(this.props.onPress)
  }

  render() {
    const deck = this.props.deck

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Animated.View
          style={[
            styles.deck,
            {
              transform: [{ scale: this.state.animatedValue }],
            },
          ]}
        >
          <Text style={styles.title}>{deck.title}</Text>
          <Text styes={styles.count}>{deck.questions ? deck.questions.length : 0}</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

class DeckList extends Component {
  static navigationOptions = {
    title: 'Overview',
  }

  componentDidMount() {
    this.props.getDecks()
  }

  gotoDeck = (deckId) => {
    // Animated.spring(this.state.animatedValue, {
    //   toValue: 40,
    // }).start()
    this.props.setDeck(deckId)
    this.props.navigation.navigate('Deck')
  }

  render() {
    const { decks } = this.props

    return (
      <ScrollView style={styles.container}>
        {Object.values(decks)
          .sort((a, b) => a.questions.length < b.questions.length)
          .map((deck) => (
            <DeckButton onPress={() => this.gotoDeck(deck.id)} deck={deck} key={deck.id} />
          ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: theme.space.m,
    backgroundColor: theme.color.light,
  },
  deck: {
    padding: theme.space.m,
    marginBottom: theme.space.m,
    backgroundColor: theme.color.bg,
    borderRadius: theme.border.radius.m,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
  },
  count: {
    fontSize: theme.font.size.l,
    alignSelf: 'center',
  },
})

const mapStateToProps = (state) => ({
  decks: state.decks,
})

const mapDispatchToProps = {
  getDecks,
  setDeck,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
