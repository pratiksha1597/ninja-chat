 import firebase from 'firebase'
 import firestore from 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA1xG_C0qkYDPxM3TXAg3WIdeLkC6okNeE",
  authDomain: "udemy-ninja-chat-2c5b5.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-2c5b5.firebaseio.com",
  projectId: "udemy-ninja-chat-2c5b5",
  storageBucket: "udemy-ninja-chat-2c5b5.appspot.com",
  messagingSenderId: "1018931535879",
  appId: "1:1018931535879:web:fa7a39d32f72eca2350aa2"
};
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({timestampsInSnapshots:true})



  
  
  //export firstore database  

  export default firebaseApp.firestore()