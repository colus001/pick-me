export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const toggleModal = data => ({
  type: TOGGLE_MODAL,
  payload: {
    data: data || {},
  },
})

export const HIDE_MODAL = 'HIDE_MODAL'
export const hideModal = () => ({
  type: HIDE_MODAL,
})
