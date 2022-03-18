// firebase@8.8.0 
// Firebase V8
import firebase from 'firebase';




export const firebaseConfig = {
  apiKey: "AIzaSyCKz78lisPd251LHlL4kB6WydznN7S3h1c",
  authDomain: "disney-next-build.firebaseapp.com",
  projectId: "disney-next-build",
  storageBucket: "disney-next-build.appspot.com",
  messagingSenderId: "1024555634763",
  appId: "1:1024555634763:web:2d546867f487fc6662bdce",
  measurementId: "G-H21P6C6ZZY"
};

const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();


const db = app.firestore();

export {db};


