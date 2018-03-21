import { combineReducers } from 'redux'

import { GET_DECKS_SUCCESS, ADD_DECKS_SUCCESS } from '../actions'

const decks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS_SUCCESS:
      return action.payload
    case ADD_DECKS_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  decks,
})

export default rootReducer
