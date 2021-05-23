import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyBQPgCVLDfCBZAQbeGNWo56Ry7j9YfMPlo",
    authDomain: "landlordtenantapp-9c561.firebaseapp.com",
    projectId: "landlordtenantapp-9c561",
    storageBucket: "landlordtenantapp-9c561.appspot.com",
    messagingSenderId: "203437309467",
    appId: "1:203437309467:web:6a15a3f544c2ec806fc2be",
    databaseUrl: "landlordtenantapp-9c561"
   
  };
  // Initialize Firebase
  const firebaseInit = firebase.initializeApp(firebaseConfig);
  const  database = firebase.database()
  const auth = firebase.auth()

  export { 
    auth,
      firebaseInit, 
      database
    }
 

  