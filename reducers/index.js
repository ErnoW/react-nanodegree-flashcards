import { combineReducers } from 'redux'

import { GET_DECKS_SUCCESS } from '../actions'

const decks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  decks,
})

export default rootReducer
