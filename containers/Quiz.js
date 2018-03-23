import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import * as theme from '../utils/theme'
import { setLocalNotification, clearLocalNotification } from '../utils/notification'

import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

class Quiz extends Component {
  state = {
    index: 0,
    order: [],
    score: 0,
    showAnswer: false,
    finished: false,
  }

  static navigationOptions = ({ navigation }) => {
    if (navigation.state.params != undefined) {
      return {
        title: `Quiz: ${navigation.state.params.deckTitle}`,
      }
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      deckTitle: this.props.deck.title,
    })

    this.setState({
      order: this.randomizedOrder(this.props.deck.questions.length),
    })
  }

  reset = () => {
    this.setState({
      index: 0,
      order: this.randomizedOrder(this.props.deck.questions.length),
      score: 0,
      showAnswer: false,
      finished: false,
    })
  }

  randomizedOrder = (length) => {
    let array = Array.from(Array(length).keys())
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  showAnswer = () => {
    this.setState({ showAnswer: true })
  }

  nextQuestion = (scored) => {
    const remaining = this.props.deck.questions.length - this.state.index - 1

    if (remaining === 0) {
      clearLocalNotification().then(setLocalNotification)
    }

    this.setState((prevState) => ({
      index: remaining > 0 ? prevState.index + 1 : prevState.index,
      score: scored ? prevState.score + 1 : prevState.score,
      showAnswer: false,
      finished: remaining > 0 ? false : true,
    }))
  }

  render() {
    const deck = this.props.deck
    const { index, order, score, showAnswer, finished } = this.state

    const Question = () => (
      <View style={styles.block}>
        <Text>Question</Text>
        <Text style={styles.big}>{deck.questions[order[index]].question}</Text>
        <ButtonGroup>
          <Button onPress={this.showAnswer}>Show Answer</Button>
        </ButtonGroup>
      </View>
    )

    const Answer = () => (
      <View style={styles.block}>
        <Text>Answer</Text>
        <Text style={styles.big}>{deck.questions[order[index]].answer}</Text>
        <ButtonGroup>
          <Button onPress={() => this.nextQuestion(true)}>Good</Button>
          <Button onPress={() => this.nextQuestion(false)}>Wrong</Button>
        </ButtonGroup>
      </View>
    )

    const Results = () => (
      <View>
        <Text style={styles.big}>Well done!</Text>
        <Text>Your score is:</Text>
        <Text style={styles.score}>
          {score} / {deck.questions.length}
        </Text>
        <ButtonGroup>
          <Button onPress={this.goBack}>Go back to deck</Button>
          <Button onPress={this.reset}>Try again</Button>
        </ButtonGroup>
      </View>
    )

    const Remaining = () => (
      <View>
        <Text>Questions remaining: {deck.questions.length - this.state.index}</Text>
      </View>
    )

    return (
      <View style={styles.container}>
        {order.length > 0 && !showAnswer && !finished && <Question />}
        {order.length > 0 && showAnswer && !finished && <Answer />}
        {!finished && <Remaining />}
        {finished && <Results />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: theme.space.m,
    backgroundColor: theme.color.light,
  },
  block: {
    marginBottom: theme.space.m,
  },
  big: {
    fontSize: theme.font.size.l,
    color: theme.color.primary,
    marginVertical: theme.space.m,
  },
  score: {
    fontSize: 40,
    color: theme.color.primary,
    marginVertical: theme.space.m,
  },
})

const mapStateToProps = (state) => ({
  deck: state.decks[state.currentDeck],
})

export default connect(mapStateToProps)(Quiz)
