import firebase from 'services/firebase'

const firebaseRef = firebase.ref('offers')

// SYNC
export const ADD_OFFER = 'ADD_OFFER'
export const addOffer = offer => ({
  type: ADD_OFFER,
  payload: {
    offer,
  },
})

export const REMOVE_OFFER = 'REMOVE_OFFER'
export const removeOffer = offer => ({
  type: REMOVE_OFFER,
  payload: {
    offer,
  },
})

// ASYNC
export const subscribeOffers = () => (dispatch) => {
  firebaseRef.on('child_added', (snapshot) => {
    const offer = {
      id: snapshot.key,
      ...snapshot.val(),
    }

    dispatch(addOffer(offer))
  })

  firebaseRef.on('child_removed', (snapshot) => {
    const offer = {
      id: snapshot.key,
      ...snapshot.val(),
    }

    dispatch(removeOffer(offer))
  })
}
