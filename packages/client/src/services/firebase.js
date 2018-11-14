import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCHW2kHxdN0FF7JTwcqM_NkTJoSGs4Bf68",
  authDomain: "netcon-219117.firebaseapp.com",
  databaseURL: "https://netcon-219117.firebaseio.com",
  projectId: "netcon-219117",
  storageBucket: "netcon-219117.appspot.com",
  messagingSenderId: "161462834575"
};

firebase.initializeApp(config);

const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

export {
  firebase,
  googleAuth
}