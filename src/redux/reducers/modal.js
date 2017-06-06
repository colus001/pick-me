import { clone } from 'lodash'

import { TOGGLE_MODAL, HIDE_MODAL } from 'redux/actions/modal'

const defaultState = {
  title: null,
  content: null,
  isVisible: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      const { title, content } = action.payload.data
      if (!content) return clone(defaultState)

      return {
        isVisible: true,
        title,
        content,
      }
    }
    case HIDE_MODAL:
      console.log(clone(defaultState));
      return clone(defaultState)
    default:
      return state
  }
}

export default reducer
