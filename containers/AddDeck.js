import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import * as theme from '../utils/theme'
import { addDeck } from '../actions'

import Input from '../components/Input'
import Button from '../components/Button'

class AddDeck extends Component {
  state = {
    deckName: '',
  }

  static navigationOptions = {
    title: 'New Deck',
  }

  handleAddDeck = () => {
    this.props.addDeck(this.state.deckName).then((response) => {
      this.props.navigation.navigate('Deck', { deck: response.payload })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          onChangeText={(deckName) => this.setState({ deckName })}
          value={this.state.deckName}
          placeholder="Enter a title..."
          label="Deck title"
        />
        <Button onPress={this.handleAddDeck}>Add deck</Button>
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

const mapDispatchToProps = {
  addDeck,
}

export default connect(null, mapDispatchToProps)(AddDeck)
