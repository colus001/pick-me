import { pick } from 'lodash'

export const SET_USER_DATA = 'SET_USER_DATA'
export const setUserData = user => ({
  type: SET_USER_DATA,
  payload: {
    user: pick(user, ['uid', 'email', 'emailVerified']),
  },
})
