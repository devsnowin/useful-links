import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const config = {
  firebaseConfig: {
    apiKey: "AIzaSyAcjeeyUyF79qOoGMw7CuKIDyBTqBJKanU",
    authDomain: "useful-links-66f0e.firebaseapp.com",
    projectId: "useful-links-66f0e",
    storageBucket: "useful-links-66f0e.appspot.com",
    messagingSenderId: "108423545349",
    appId: "1:108423545349:web:f6a67dce8834137304d26c"
  }
};
function initialize() {
  const firebaseApp = initializeApp(config.firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const firebaseAuth = getAuth(firebaseApp);
  return { firebaseApp, firestore, firebaseAuth };
}
export {
  initialize as i
};
