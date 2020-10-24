// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAgSxUoj8Q3jrhEKbzvEG7p04WPE0ii-ss",
    authDomain: "slack-clone-ded42.firebaseapp.com",
    databaseURL: "https://slack-clone-ded42.firebaseio.com",
    projectId: "slack-clone-ded42",
    storageBucket: "slack-clone-ded42.appspot.com",
    messagingSenderId: "614401064737",
    appId: "1:614401064737:web:632a936770407017ec8860",
    measurementId: "G-ZYDCLYB3ED"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;