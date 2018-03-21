import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

import * as theme from '../utils/theme'

import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'

class Quiz extends Component {
  state = {
    index: 0,
    score: 0,
    showAnswer: false,
    finished: false,
  }

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
      title: `Quiz: ${deck.title}`,
    }
  }

  reset = () => {
    this.setState({
      index: 0,
      score: 0,
      showAnswer: false,
      finished: false,
    })
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  showAnswer = () => {
    this.setState({ showAnswer: true })
  }

  nextQuestion = (scored) => {
    const remaining =
      this.props.navigation.state.params.deck.questions.length - this.state.index - 1

    this.setState((prevState) => ({
      index: remaining > 0 ? prevState.index + 1 : prevState.index,
      score: scored ? prevState.score + 1 : prevState.score,
      showAnswer: false,
      finished: remaining > 0 ? false : true,
    }))
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { index, score, showAnswer, finished } = this.state

    const Question = () => (
      <View>
        <Text>{deck.questions[index].question}</Text>
        <ButtonGroup>
          <Button onPress={this.showAnswer}>Show Answer</Button>
        </ButtonGroup>
      </View>
    )

    const Answer = () => (
      <View>
        <Text>{deck.questions[index].answer}</Text>
        <ButtonGroup>
          <Button onPress={() => this.nextQuestion(true)}>Good</Button>
          <Button onPress={() => this.nextQuestion(false)}>Wrong</Button>
        </ButtonGroup>
      </View>
    )

    const Results = () => (
      <View>
        <Text>Well done your score is:</Text>
        <Text>
          {score} / {deck.questions.length}
        </Text>
        <ButtonGroup>
          <Button onPress={this.goBack}>Go back to deck</Button>
          <Button onPress={this.reset}>Try again</Button>
        </ButtonGroup>
      </View>
    )

    return (
      <View style={styles.container}>
        {!showAnswer && !finished && <Question />}
        {showAnswer && !finished && <Answer />}
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
})

export default Quiz
