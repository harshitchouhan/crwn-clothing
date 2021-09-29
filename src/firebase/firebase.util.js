import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyBDw6qJoiIalU4A10WEYSCCV3BaxJUNYgY',
  authDomain: 'crwn-db-9242f.firebaseapp.com',
  projectId: 'crwn-db-9242f',
  storageBucket: 'crwn-db-9242f.appspot.com',
  messagingSenderId: '109695055924',
  appId: '1:109695055924:web:773ca132a0333bde87b261',
  measurementId: 'G-PV7YB7EVPN',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
