 import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDTRSfloHseshSfQwNWpLVEUKU0sYYGrz8",
  authDomain: "school-attendance-app-754dc.firebaseapp.com",
  databaseURL: "https://school-attendance-app-754dc-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-754dc",
  storageBucket: "school-attendance-app-754dc.appspot.com",
  messagingSenderId: "217901423596",
  appId: "1:217901423596:web:18290fbed333188eb67ec9",
  measurementId: "G-TYTKKTQ82Q"
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();


  