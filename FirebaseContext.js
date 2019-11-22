import React, { createContext } from 'react'
import app from 'firebase/app'

const FirebaseContext = createContext(null)
export { FirebaseContext }

export default ({ children }) => {
  if (!app.apps.length) {
    app.initializeApp({
      apiKey: 'AIzaSyCNk6YM5DZXEjhg5XwtwUEbHDdksSy3CgE',
      authDomain: 'panamafc-81bc0.firebaseapp.com',
      databaseURL: 'https://panamafc-81bc0.firebaseio.com',
      storageBucket: 'panamafc-81bc0.appspot.com',
    })
  }
  return <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
}
