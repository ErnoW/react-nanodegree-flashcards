import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import * as theme from './utils/theme'

import reducer from './reducers'

import { getDecks, getDeck, saveNewDeck, addCard, clearStorage } from './utils/api'
import DeckList from './containers/DeckList'
import AddDeck from './containers/AddDeck'
import Deck from './containers/Deck'
import AddQuestion from './containers/AddQuestion'
import Quiz from './containers/Quiz'
import { setLocalNotification } from './utils/notification'

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
        ),
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="plus-box" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: theme.color.primary,
    },
  },
)

const MainNavigator = StackNavigator(
  {
    Home: {
      screen: Tabs,
    },
    Deck: {
      screen: Deck,
    },
    AddQuestion: {
      screen: AddQuestion,
    },
    Quiz: {
      screen: Quiz,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {},
    cardStyle: { backgroundColor: theme.color.bg },
  },
)

const logger = createLogger({})

const store = createStore(reducer, applyMiddleware(thunk))

class App extends Component {
  async componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar translucent />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
