import * as api from '../utils/api'

export const GET_DECKS_REQUEST = 'GET_DECKS_REQUEST'
export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS'
export const GET_DECKS_ERROR = 'GET_DECKS_ERROR'

export const ADD_DECK_REQUEST = 'ADD_DECK_REQUEST'
export const ADD_DECK_SUCCESS = 'ADD_DECK_SUCCESS'
export const ADD_DECK_ERROR = 'ADD_DECK_ERROR'

const getDecksRequest = () => {
  return {
    type: GET_DECKS_REQUEST,
  }
}

const getDecksError = (error) => {
  return {
    type: GET_DECKS_ERROR,
    error: error,
  }
}

const getDecksSuccess = (payload) => {
  return {
    type: GET_DECKS_SUCCESS,
    payload: payload,
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
    error: error,
  }
}

export const addDeck = (title) => {
  return (dispatch) => {
    dispatch(addDeckRequest())
    return api.saveNewDeck(title).then((response) => dispatch(addDeckSuccess(response)))
  }
}

export const getDecks = () => {
  return (dispatch) => {
    dispatch(getDecksRequest())
    return api.getDecks().then((response) => dispatch(getDecksSuccess(response)))
  }
}
