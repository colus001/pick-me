# Pick Me

> This project is to show yourself better as developer especially front-end. It can be used as simple boilerplate for those who doesn't know how to deal with react and its related tech-stacks.

### How to develop

1. Install package dependencies

  ```
  yarn
  ```

1. Add firebase configuration

  1. Sign-up firebase https://firebase.google.com

  1. Create `firebaseConfig.js` to `/src/services`

    ```
    const config = {
      apiKey: 'API_KEY',
      authDomain: 'YOUR_DOMAIN.firebaseapp.com',
      databaseURL: 'https://YOUR_DB_DOMAIN.firebaseio.com',
      projectId: 'PROJECT_ID',
      storageBucket: 'STORAGE_BUCKET',
      messagingSenderId: 'MESSAGING_SENDER_ID',
    }

    export default config
    ```

1. Start build

  ```
  yarn start
  ```

1. How to test

  - Jest, chai and enzyme used to write and perform unit test

  ```
  yarn test
  ```

  - Check `package.json` if you need more detail

### TO-DO

  - [ ] Production deployment document
  - [ ] I18n with magnifier effect
  - [ ] Create github issue when someone makes offer instead of using firebase
  - [x] ~~Server Side Rendering~~ -> Unable to apply on github.io
