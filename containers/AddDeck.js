import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import * as theme from '../utils/theme'
import { addDeck } from '../actions'

import Input from '../components/Input'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

class AddDeck extends Component {
  state = {
    deckName: '',
  }

  navigationOptions = {
    title: 'New Deck',
  }

  handleAddDeck = () => {
    this.props.addDeck(this.state.deckName).then((response) => {
      this.props.navigation.navigate('Deck')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Paragraph>To add a new deck, first provide a title below.</Paragraph>
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
