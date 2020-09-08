import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyA4OWg7E45FU9M5o98D1IL48dtk8o4bKzU",
  authDomain: "usergps-3d263.firebaseapp.com",
  databaseURL: "https://usergps-3d263.firebaseio.com",
  projectId: "usergps-3d263",
  storageBucket: "usergps-3d263.appspot.com",
  messagingSenderId: "9193278715",
  appId: "1:9193278715:web:0200e1d20213759f89345e"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;