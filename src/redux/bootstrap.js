import { auth } from 'services/firebase'
import { subscribeOffers } from 'redux/actions/offer'
import { setUserData } from 'redux/actions/user'

const bootstrap = (store) => {
  store.dispatch(subscribeOffers())
  auth.onAuthStateChanged(user => store.dispatch(setUserData(user)))

  return store
}

export default bootstrap
