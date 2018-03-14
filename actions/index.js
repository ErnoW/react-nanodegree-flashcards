import * as api from '../utils/api'

export const GET_DECKS_REQUEST = 'GET_DECKS_REQUEST'
export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS'
export const GET_DECKS_ERROR = 'GET_DECKS_ERROR'

const decksRequest = () => {
  return {
    type: GET_DECKS_REQUEST,
  }
}

const decksError = (error) => {
  return {
    type: GET_DECKS_ERROR,
    error: error,
  }
}

const decksReceived = (payload) => {
  return {
    type: GET_DECKS_SUCCESS,
    payload: payload,
  }
}

export const getDecks = () => {
  return (dispatch) => {
    dispatch(decksRequest())
    return api.getDecks().then((response) => dispatch(decksReceived(response)))
  }
}
