import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsb3TAGK_FLv7rn5hlEwDq6asH6qWzuSA",
  authDomain: "sbabadag1.firebaseapp.com",
  databaseURL: "https://sbabadag1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sbabadag1",
  storageBucket: "sbabadag1.appspot.com",  // This is the Cloud Storage bucket
  messagingSenderId: "25031637223",
  appId: "1:25031637223:web:99256b91a575120d92ca42",
  measurementId: "G-87LWBM821R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); // Ensure this is properly defined
export const database = getDatabase(app);
export const storage = getStorage(app);