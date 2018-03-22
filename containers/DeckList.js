import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import * as theme from '../utils/theme'
import { getDecks, setDeck } from '../actions'

class DeckList extends Component {
  navigationOptions = {
    title: 'Overview',
  }

  componentDidMount() {
    this.props.getDecks()
  }

  gotoDeck = (deckId) => {
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
            <TouchableOpacity
              onPress={() => this.gotoDeck(deck.id)}
              key={deck.id}
              style={styles.deck}
            >
              <Text style={styles.title}>{deck.title}</Text>
              <Text styes={styles.count}>{deck.questions ? deck.questions.length : 0}</Text>
            </TouchableOpacity>
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
