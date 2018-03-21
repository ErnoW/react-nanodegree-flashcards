import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import * as theme from '../utils/theme'
import { getDecks } from '../actions'

class DeckList extends Component {
  static navigationOptions = {
    title: 'Overview',
  }

  componentDidMount() {
    this.props.getDecks()
  }

  render() {
    const { decks } = this.props

    return (
      <ScrollView style={styles.container}>
        {Object.values(decks).map((deck) => (
          <View key={deck.id} style={{ paddingBottom: 250 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Deck', { deck: deck })}
            >
              <Text>{deck.title}</Text>
              <Text>{deck.questions ? deck.questions.length : 0}</Text>
            </TouchableOpacity>
          </View>
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
})

const mapStateToProps = (state) => ({
  decks: state.decks,
})

const mapDispatchToProps = {
  getDecks,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
