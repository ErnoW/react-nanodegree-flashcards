import * as api from '../utils/api'

export const GET_DECKS_REQUEST = 'GET_DECKS_REQUEST'
export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS'
export const GET_DECKS_ERROR = 'GET_DECKS_ERROR'

export const GET_DECK_REQUEST = 'GET_DECK_REQUEST'
export const GET_DECK_SUCCESS = 'GET_DECK_SUCCESS'
export const GET_DECK_ERROR = 'GET_DECK_ERROR'

export const SET_DECK = 'SET_DECK'

export const ADD_DECK_REQUEST = 'ADD_DECK_REQUEST'
export const ADD_DECK_SUCCESS = 'ADD_DECK_SUCCESS'
export const ADD_DECK_ERROR = 'ADD_DECK_ERROR'

export const ADD_CARD_REQUEST = 'ADD_CARD_REQUEST'
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS'
export const ADD_CARD_ERROR = 'ADD_CARD_ERROR'

const getDecksRequest = () => {
  return {
    type: GET_DECKS_REQUEST,
  }
}

const getDecksError = (error) => {
  return {
    type: GET_DECKS_ERROR,
    error: error.message,
  }
}

const getDecksSuccess = (payload) => {
  return {
    type: GET_DECKS_SUCCESS,
    payload: payload,
  }
}

const getDeckRequest = () => {
  return {
    type: GET_DECK_REQUEST,
  }
}

const getDeckError = (error) => {
  return {
    type: GET_DECK_ERROR,
    error: error.message,
  }
}

const getDeckSuccess = (payload) => {
  return {
    type: GET_DECK_SUCCESS,
    payload: payload,
  }
}

export const setDeck = (deckId) => {
  return {
    type: SET_DECK,
    deckId: deckId,
  }
}

const addDeckRequest = () => {
  return {
    type: ADD_DECK_REQUEST,
  }
}

const addDeckSuccess = (payload) => {
  return {
    type: ADD_DECK_SUCCESS,
    payload: payload,
  }
}

const addDeckError = (error) => {
  return {
    type: ADD_DECK_ERROR,
    error: error.message,
  }
}

const addCardRequest = () => {
  return {
    type: ADD_CARD_REQUEST,
  }
}

const addCardSuccess = (payload) => {
  return {
    type: ADD_CARD_SUCCESS,
    payload: payload,
  }
}

const addCardError = (error) => {
  return {
    type: ADD_CARD_ERROR,
    error: error.message,
  }
}

export const getDecks = () => {
  return (dispatch) => {
    dispatch(getDecksRequest())
    return api.getDecks().then((response) => dispatch(getDecksSuccess(response)))
  }
}

export const getDeck = (deckId) => {
  return (dispatch) => {
    dispatch(getDeckRequest())
    return api.getDeck(deckId).then((response) => dispatch(getDeckSuccess(response)))
  }
}

export const addDeck = (title) => {
  return (dispatch) => {
    dispatch(addDeckRequest())
    return api.saveNewDeck(title).then((response) => dispatch(addDeckSuccess(response)))
  }
}

export const addCard = (deckId, card) => {
  return (dispatch) => {
    dispatch(addCardRequest())
    return api.addCard(deckId, card).then((response) => dispatch(addCardSuccess(response)))
  }
}
