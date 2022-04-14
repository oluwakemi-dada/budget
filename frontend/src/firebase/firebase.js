import firebase from 'firebase/app';
import 'firebase/database';
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBtMvNB2veqjopiMl2F2X5xNIT5pI3edRs',
  authDomain: 'budget-app-x.firebaseapp.com',
  databaseURL: 'https://budget-app-x-default-rtdb.firebaseio.com',
  projectId: 'budget-app-x',
  storageBucket: 'budget-app-x.appspot.com',
  messagingSenderId: '285573379405',
  appId: '1:285573379405:web:5fb24cc7827b0982d37304',
  measurementId: 'G-PR5DJCPB4X',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
