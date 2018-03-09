import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {
  getDecks,
  getDeck,
  saveNewDeck,
  addCard,
  clearStorage,
} from './utils/api'

export default class App extends React.Component {
  state = {
    decks: {},
    deck: {},
  }
  async componentDidMount() {
    clearStorage()
    // await getDecks().then((decks) => this.setState({ decks }))
    await getDeck('123').then((deck) => this.setState({ deck }))
    await addCard('123', { question: 'hi', answer: 'woop' })
    await getDeck('123').then((deck) => this.setState({ deck }))
    await addCard('123', { question: 'wololololol', answer: 'jippie' })
    await getDeck('123').then((deck) => this.setState({ deck }))

    // await saveNewDeck('test')
    // await getDecks().then((decks) => this.setState({ decks }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>{JSON.stringify(this.state.decks)}</Text>
        </View>
        <View>
          <Text>---------------</Text>
        </View>
        <View style={styles.container}>
          <Text>{JSON.stringify(this.state.deck)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
