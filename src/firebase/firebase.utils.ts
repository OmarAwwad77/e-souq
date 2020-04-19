import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { User } from 'firebase';
import { User as appUser } from '../redux/user/user.types';

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
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const db = firebase.firestore();
export type FirebaseUser = User;
export type DocRef = firebase.firestore.DocumentReference;

export const googleSignIn = () => auth.signInWithPopup(googleProvider);

export const addUserToDatabase = async ({
	uid,
	email,
	displayName,
}: appUser) => {
	await db.collection('users').doc(uid).set({
		email,
		displayName,
	});
};

export const getCurrentUser = () => {
	return new Promise<(User | null) | Error>((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(
			(user) => {
				unsubscribe();
				resolve(user);
			},
			(error) => {
				unsubscribe();
				reject(error);
			}
		);
	});
};

export default firebase;
