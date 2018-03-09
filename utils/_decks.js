import { AsyncStorage } from 'react-native'
import uuid from 'uuid-v4'

export const DECKS_STORAGE_KEY = 'Flashcards:decks'

export const setDummyData = (results) => {
  const id1 = uuid()
  const id2 = '123'

  const dummyData = {
    [id1]: {
      title: 'React',
      id: id1,
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
        },
      ],
    },
    [id2]: {
      title: 'JavaScript',
      id: id2,
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.',
        },
      ],
    },
  }

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData
}

export const formatResults = (results) => {
  return results === null ? setDummyData() : JSON.parse(results)
}
