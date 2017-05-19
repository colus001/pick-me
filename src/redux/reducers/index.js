import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import offers from './offers'

const rootReducer = combineReducers({
  user,
  offers,
  form: formReducer,
})

export default rootReducer
