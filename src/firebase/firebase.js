import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAlOKJrWHyY-5MfadbWicwBnhdam6j2cYE",
  authDomain: "grievance-system-3be67.firebaseapp.com",
  projectId: "grievance-system-3be67",
  storageBucket: "grievance-system-3be67.appspot.com",
  messagingSenderId: "477946279778",
  appId: "1:477946279778:web:49d2cc5de58daa9a53de3b",
});

export const auth = app.auth();
export const storage = app.storage();
export default app;
