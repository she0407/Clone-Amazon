import firebase from 'firebase';    

const firebaseConfig = {
    apiKey: "AIzaSyAtOfL37e2a4aourN7KyCOi9Uy-Onl_tts",
    authDomain: "az-clone-1e7d7.firebaseapp.com",
    databaseURL: "https://az-clone-1e7d7.firebaseio.com",
    projectId: "az-clone-1e7d7",
    storageBucket: "az-clone-1e7d7.appspot.com",
    messagingSenderId: "842697938159",
    appId: "1:842697938159:web:3375ef8c2c9c8097e3771a",
    measurementId: "G-XHMCFERB0K"
  };
 
  const auth = firebase.auth();
  export {auth};