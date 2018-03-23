import { AsyncStorage } from 'react-native'
import uuid from 'uuid-v4'

import { DECKS_STORAGE_KEY, formatResults } from './_decks'

export const clearStorage = () => {
  AsyncStorage.clear()
}

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatResults)
}

export const getDeck = (id) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    const res = formatResults(results)
    return res[id]
  })
}

export const saveNewDeck = (title) => {
  if (!title) {
    return Promise.reject(new Error('invalid title'))
  }

  const id = uuid()
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [id]: { id, title, questions: [] },
    }),
  ).then(() => ({ id, title, questions: [] }))
}

export const addCard = (deckId, card) => {
  if (!deckId) {
    return Promise.reject(new Error('unknown deck'))
  }
  if (!card.question) {
    return Promise.reject(new Error('invalid question'))
  }
  if (!card.answer) {
    return Promise.reject(new Error('invalid answer'))
  }

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
