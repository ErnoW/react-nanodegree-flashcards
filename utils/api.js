import { AsyncStorage } from 'react-native'
import uuid from 'uuid-v4'

import { DECKS_STORAGE_KEY, formatResults } from './_decks'

export const clearStorage = () => {
  AsyncStorage.clear()
}

export const getDecks = () => {
  //TODO: simple check on errors or empty etc
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatResults)
}

export const getDeck = (id) => {
  //TODO: simple check on errors or empty etc
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    const res = formatResults(results)
    return res[id]
  })
}

export const saveNewDeck = (title) => {
  //TODO: simple check on errors or empty etc
  const id = uuid()
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [id]: { id, title, questions: [] },
    }),
  ).then(() => ({ id, title, questions: [] }))
}

export const addCard = (deckId, card) => {
  //TODO: simple check on errors or empty etc
  return getDeck(deckId)
    .then((deck) => {
      const questions = deck.questions.concat(card)

      return AsyncStorage.mergeItem(
        DECKS_STORAGE_KEY,
        JSON.stringify({
          [deckId]: { questions },
        }),
      )
    })
    .then(() => ({ deckId: deckId, card: card }))
}
