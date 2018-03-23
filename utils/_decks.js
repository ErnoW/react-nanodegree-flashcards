import { AsyncStorage } from 'react-native'
import uuid from 'uuid-v4'

export const DECKS_STORAGE_KEY = 'Flashcards:decks'

export const setDummyData = (results) => {
  const id1 = uuid()
  const id2 = uuid()
  const id3 = uuid()

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
      title: 'Trivia',
      id: id2,
      questions: [
        {
          question: 'What is a group of lions called?',
          answer: 'A pride',
        },
        {
          question: 'According to the bible, who is the disciple that betrayed Jesus?',
          answer: 'Judas Iscariot',
        },
        {
          question: 'What is the name for trees that never lose their leaves?',
          answer: 'Evergreen',
        },
        {
          question: 'According to Greek mythology, who was the goddess of beauty?',
          answer: 'Aphrodite',
        },
        {
          question: 'What capital city lies on the Potomac Rive?',
          answer: 'Washington D.C.',
        },
        {
          question: 'What is the oldest city in the United States?',
          answer: 'Saint Augustine, Florida',
        },
        {
          question: 'Which music group has received the most Grammy Awards?',
          answer: 'U2',
        },
        {
          question: 'What hills border Scotland and England?',
          answer: 'Cheviot Hills',
        },
        {
          question: 'The first person shooter video game Doom was first released in what year?',
          answer: '1993',
        },
        {
          question: 'What are the four main ingredients in beer?',
          answer: 'Grain, hops, yeast, and water',
        },
      ],
    },
    [id3]: {
      title: 'JavaScript',
      id: id3,
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
