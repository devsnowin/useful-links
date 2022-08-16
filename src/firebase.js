import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

import { config } from "./config/db";

export function initialize() {
  const firebaseApp = initializeApp(config.firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const firebaseAuth = getAuth(firebaseApp)

  return { firebaseApp, firestore, firebaseAuth };
}
