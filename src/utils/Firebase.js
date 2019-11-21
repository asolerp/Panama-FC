import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCNk6YM5DZXEjhg5XwtwUEbHDdksSy3CgE',
  authDomain: 'panamafc-81bc0.firebaseapp.com',
  databaseURL: 'https://panamafc-81bc0.firebaseio.com',
  storageBucket: 'panamafc-81bc0.appspot.com',
}
class Firebase {

  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

}

export default Firebase
