import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyCkzESP4lQ6DKaArx3tkntwey79wGgBBbo",
  authDomain: "complaint-forum-fc1ed.firebaseapp.com",
  projectId: "complaint-forum-fc1ed",
  storageBucket: "complaint-forum-fc1ed.appspot.com",
  messagingSenderId: "171219724155",
  appId: "1:171219724155:web:bf7be8a3270d513d593fde"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

