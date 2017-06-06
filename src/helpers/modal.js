import store from 'redux/store'

import { toggleModal, hideModal } from 'redux/actions/modal'

const ModalHelper = {
  toggleModal: data => store.dispatch(toggleModal(data)),
  hideModal: () => store.dispatch(hideModal()),
}

export default ModalHelper
