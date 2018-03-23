import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import * as theme from '../utils/theme'
import { addDeck, setDeck } from '../actions'

import Input from '../components/Input'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

class AddDeck extends Component {
  state = {
    deckName: '',
  }

  navigationOptions = {
    title: 'New Deck',
    error: '',
  }

  handleAddDeck = () => {
    this.props
      .addDeck(this.state.deckName)
      .then((response) => {
        this.setState({
          deckName: '',
          error: '',
        })
        this.props.setDeck(response.payload.id)
        this.props.navigation.navigate('Deck')
      })
      .catch((error) =>
        this.setState({
          error: error.message,
        }),
      )
  }

  render() {
    const { deckName, error } = this.state

    return (
      <View style={styles.container}>
        <Paragraph>To add a new deck, first provide a title below.</Paragraph>
        <Input
          onChangeText={(deckName) => this.setState({ deckName })}
          value={deckName}
          placeholder="Enter a title..."
          label="Deck title"
        />
        {!!error && <Paragraph style={styles.error}>Error: {error}.</Paragraph>}
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
  error: {
    color: theme.color.alert,
  },
})

const mapDispatchToProps = {
  addDeck,
  setDeck,
}

export default connect(null, mapDispatchToProps)(AddDeck)
