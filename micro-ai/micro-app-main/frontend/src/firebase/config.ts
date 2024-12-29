import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5mjFUZbFzcLzInqBXSB-LILWKrOSQ_4A",
  authDomain: "micro-ai-5df30.firebaseapp.com",
  projectId: "micro-ai-5df30",
  storageBucket: "micro-ai-5df30.firebasestorage.app",
  messagingSenderId: "290991587661",
  appId: "1:290991587661:web:9b58158b4af3a19b107704"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
