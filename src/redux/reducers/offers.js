import { findIndex } from 'lodash'

import { ADD_OFFER, REMOVE_OFFER } from 'redux/actions/offer'

const defaultState = []

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_OFFER:
      return [
        ...state,
        action.payload.offer,
      ]
    case REMOVE_OFFER: {
      const index = findIndex(state, offer => offer.id === action.payload.offer.id)

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ]
    }
    default:
      return state
  }
}

export default reducer
