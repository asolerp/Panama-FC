import {useContext} from 'react'
import app from 'firebase/app'
import 'firebase/auth'
import LoadingContext from '../../LoadingContext'

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
  doCreateUserWithEmailAndPassword = async (email, password) =>{
    try {
      const value = useContext(LoadingContext);
      console.log(value)
      // await this.auth.createUserWithEmailAndPassword(email, password)
    } catch(err) {
      console.log(err)
    }
  }

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

}

export default Firebase
