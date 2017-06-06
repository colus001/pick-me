import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import offers from './offers'
import modal from './modal'

const rootReducer = combineReducers({
  user,
  offers,
  modal,
  form: formReducer,
})

export default rootReducer
