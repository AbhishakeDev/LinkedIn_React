import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAPIsYd_FUlZAfK3xwZbvYXZKukDT02zc4',
  authDomain: 'linkedin-5d64a.firebaseapp.com',
  projectId: 'linkedin-5d64a',
  storageBucket: 'linkedin-5d64a.appspot.com',
  messagingSenderId: '902503658241',
  appId: '1:902503658241:web:a54870bfc7c0fcf596a100',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
