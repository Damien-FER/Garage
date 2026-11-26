// Configuration du carnet partagé (voir LISEZMOI.md, étape « Carnet partagé »).
// Tant que c'est null, l'appli marche en mode local : tout reste sur le téléphone.
// Pour partager : remplace null par la config copiée depuis la console Firebase, par exemple :
//
// window.FIREBASE_CONFIG = {
//   apiKey: "AIza...",
//   authDomain: "carnet-atelier-xxxx.firebaseapp.com",
//   projectId: "carnet-atelier-xxxx",
//   storageBucket: "carnet-atelier-xxxx.firebasestorage.app",
//   messagingSenderId: "123456789",
//   appId: "1:123456789:web:abcdef"
// };
//
// Ces valeurs ne sont pas secrètes : c'est la règle Firestore (firestore.rules) qui protège les données.
window.FIREBASE_CONFIG = null;
