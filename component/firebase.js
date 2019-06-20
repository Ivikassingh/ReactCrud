import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyAVQRqcwm2zCHAoBa_f5KVhldg0MBg7y6o",
  authDomain: "clifiml.firebaseapp.com",
  databaseURL: "https://clifiml.firebaseio.com",
  projectId: "clifiml",
  storageBucket: "clifiml.appspot.com",
  messagingSenderId: "405132876749",
  appId: "1:405132876749:web:897deb6b4c38208d"
};
// firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
