import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCs4dgcQFbfZ3-4m6pFox6if6mupF0mhwM",
    authDomain: "fabebook-clone-dd97c.firebaseapp.com",
    databaseURL: "https://fabebook-clone-dd97c.firebaseio.com",
    projectId: "fabebook-clone-dd97c",
    storageBucket: "fabebook-clone-dd97c.appspot.com",
    messagingSenderId: "946978127814",
    appId: "1:946978127814:web:50d1c8933e31b2d31bfcc7",
    measurementId: "G-K0Y6PQ56P7"
  };


  const db = firebase.firestore();
  

  export default db;