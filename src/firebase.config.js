// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBLAVqQMLt3j95n_wivU6c6NFe25Ba2PnU',
	authDomain: 'homesearch-d13d7.firebaseapp.com',
	projectId: 'homesearch-d13d7',
	storageBucket: 'homesearch-d13d7.appspot.com',
	messagingSenderId: '217529260411',
	appId: '1:217529260411:web:ce89ce74ea24f8595445de',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
