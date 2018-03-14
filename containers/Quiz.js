import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

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
      this.props.navigation.state.params.deck.questions.length -
      this.state.index -
      1

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
        <TouchableOpacity onPress={this.showAnswer}>
          <Text>Show Answer</Text>
        </TouchableOpacity>
      </View>
    )

    const Answer = () => (
      <View>
        <Text>{deck.questions[index].answer}</Text>
        <TouchableOpacity onPress={() => this.nextQuestion(true)}>
          <Text>Good</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.nextQuestion(false)}>
          <Text>Wrong</Text>
        </TouchableOpacity>
      </View>
    )

    const Results = () => (
      <View>
        <Text>Well done your score is:</Text>
        <Text>
          {score} / {deck.questions.length}
        </Text>
        <TouchableOpacity onPress={this.goBack}>
          <Text>Go back to deck</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.reset}>
          <Text>Try again</Text>
        </TouchableOpacity>
      </View>
    )

    return (
      <View>
        {!showAnswer && !finished && <Question />}
        {showAnswer && !finished && <Answer />}
        {finished && <Results />}
      </View>
    )
  }
}

export default Quiz
