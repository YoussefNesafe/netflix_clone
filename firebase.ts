// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGL9m3ZG2fIR-nMAJBYDPgTXqIEpT8JIc",
  authDomain: "netflix-clone-195a3.firebaseapp.com",
  projectId: "netflix-clone-195a3",
  storageBucket: "netflix-clone-195a3.appspot.com",
  messagingSenderId: "82902614543",
  appId: "1:82902614543:web:26517bdf4c91251127d97a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }