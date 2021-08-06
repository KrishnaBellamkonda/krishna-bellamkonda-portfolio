import firebase from 'firebase'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA-Lz6Z-MsBfcQSvaqa-ItAEfrklXOxrK4",
    authDomain: "portfoliocontactform-9d41c.firebaseapp.com",
    databaseURL: "https://portfoliocontactform-9d41c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfoliocontactform-9d41c",
    storageBucket: "portfoliocontactform-9d41c.appspot.com",
    messagingSenderId: "344492710937",
    appId: "1:344492710937:web:417c218136495d83531e88",
    measurementId: "G-4B0G22YQ2R"
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