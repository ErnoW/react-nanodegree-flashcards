import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { getDecks } from '../actions'

class DeckList extends Component {
  static navigationOptions = {
    title: 'Overview',
  }

  componentDidMount() {
    this.props.dispatch(getDecks())
  }

  render() {
    const { decks } = this.props

    return (
      <View>
        {Object.values(decks).map((deck) => (
          <View key={deck.id}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Deck', { deck: deck })
              }
            >
              <Text>{deck.title}</Text>
              <Text>{deck.questions ? deck.questions.length : 0}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  decks: state.decks,
})

export default connect(mapStateToProps)(DeckList)
