import { SET_USER_DATA } from 'redux/actions/user'

const defaultState = {}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      if (!action.payload.user.uid) return {}

      return {
        ...state,
        ...action.payload.user,
      }
    default:
      return state
  }
}

export default reducer
