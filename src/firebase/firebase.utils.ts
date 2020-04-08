import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBLiaEhkL-E04tZZepMCfFV6x2S77kg3ic',
	authDomain: 'e-souq.firebaseapp.com',
	databaseURL: 'https://e-souq.firebaseio.com',
	projectId: 'e-souq',
	storageBucket: 'e-souq.appspot.com',
	messagingSenderId: '592855560975',
	appId: '1:592855560975:web:82866fb53753322d9ac47a',
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;
