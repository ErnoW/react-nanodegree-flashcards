import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import * as theme from '../utils/theme'
import { addCard } from '../actions'

import Input from '../components/Input'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

class AddQuestion extends Component {
  state = {
    question: '',
    answer: '',
  }

  navigationOptions = {
    title: 'New Question',
  }

  handleAddCard = () => {
    const deckId = this.props.deck.id
    this.props
      .addCard(deckId, { question: this.state.question, answer: this.state.answer })
      .then((response) => {
        this.setState({
          question: '',
          answer: '',
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Paragraph>Enter the question with answer for the card below.</Paragraph>
        <Input
          onChangeText={(question) => this.setState({ question })}
          value={this.state.question}
          placeholder="Type your question..."
          label="Question"
        />
        <Input
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
          placeholder="... and its answer"
          label="Answer"
        />
        <Button onPress={this.handleAddCard}>Add card</Button>
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

const mapStateToProps = (state) => ({
  deck: state.decks[state.currentDeck],
})

const mapDispatchToProps = {
  addCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)
