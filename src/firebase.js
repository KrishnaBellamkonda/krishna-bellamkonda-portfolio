import firebase from 'firebase'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase

  let fireBaseApp;
  fireBaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();


let db = fireBaseApp.firestore();
db.settings({timeStampsInSnapshots: true})
// Like Button 
// const increment = firebase.firestore.FieldValue.increment(1)
// const decrement = firebase.firestore.FieldValue.decrement(1)

//   const realtimeDB = fireBaseApp.database() Real time database

  export {db}
