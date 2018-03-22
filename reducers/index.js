import { combineReducers } from 'redux'

import {
  GET_DECKS_SUCCESS,
  GET_DECK_SUCCESS,
  SET_DECK,
  ADD_DECKS_SUCCESS,
  ADD_CARD_SUCCESS,
} from '../actions'

const decks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS_SUCCESS:
      return action.payload
    case GET_DECK_SUCCESS:
      return state
    case ADD_DECKS_SUCCESS:
      return { ...state, ...action.payload }
    case ADD_CARD_SUCCESS:
      return {
        ...state,
        [action.payload.deckId]: {
          ...state[action.payload.deckId],
          questions: [...state[action.payload.deckId].questions, action.payload.card],
        },
      }
    default:
      return state
  }
}

const currentDeck = (state = '', action) => {
  switch (action.type) {
    case SET_DECK:
      return action.deckId
    default:
      return state
  }
}

const rootReducer = combineReducers({
  decks,
  currentDeck,
})

export default rootReducer
