import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import config_env from "./../config";

const config = {
  apiKey: config_env.apiKey,
  authDomain: config_env.authDomain,
  databaseURL: config_env.databaseURL,
  projectId: config_env.projectId,
  storageBucket: config_env.storageBucket,
  messagingSenderId: config_env.messagingSenderId,
  appId: config_env.appId,
  measurementId: config_env.measurementId
  //   apiKey: process.env.API_KEY,
  //   authDomain: process.env.DOMAIN,
  //   databaseURL: process.env.DB_URL,
  //   projectId: process.env.PROJECT_ID,
  //   storageBucket: process.env.STORAGE_BUCKET,
  //   messagingSenderId: process.env.MESSAGING_ID,
  //   appId: process.env.APP_ID,
  //   measurementId: process.env.MEAS_ID
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
