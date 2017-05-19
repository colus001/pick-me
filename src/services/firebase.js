import * as firebase from 'firebase'

import config from './firebaseConfig'

firebase.initializeApp(config)

export const database = firebase.database()

export const auth = firebase.auth()

export default database
