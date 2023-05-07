import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { createContext } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXUzzviJP4_1ZJ73xFtrlbVfk8Ujkd1oE",
  authDomain: "find-waldo-50d73.firebaseapp.com",
  projectId: "find-waldo-50d73",
  storageBucket: "find-waldo-50d73.appspot.com",
  messagingSenderId: "277046066268",
  appId: "1:277046066268:web:e261a5e898cd147f197a99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));

export const firebase = createContext(null);

root.render(
  <React.StrictMode>
    <firebase.Provider value={app}>
      <App />
    </firebase.Provider>
  </React.StrictMode>
);