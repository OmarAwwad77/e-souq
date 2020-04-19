import {
	all,
	takeLatest,
	put,
	call,
	debounce,
	take,
	fork,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
	SIGN_UP_START,
	GET_CURRENT_USER,
	GOOGLE_SIGN_IN_START,
	EMAIL_SIGN_IN_START,
	SIGN_OUT_START,
	EmailSignIn,
	SignUp,
	User,
} from './user.types';
import {
	loading,
	signInSuccess,
	signOutSuccess,
	signInFailure,
	signUpSuccess,
	signUpFailure,
} from '../root.actions';
import {
	googleSignIn,
	FirebaseUser,
	auth,
	addUserToDatabase,
	getCurrentUser,
} from '../../firebase/firebase.utils';

function* putUserOnSignSuccess(user: User): SagaIterator {
	// const { email, uid, displayName } = user;
	yield put(signInSuccess(user));

	// add usr to local storage
	localStorage.setItem('user', JSON.stringify(user));
}

function* signUpSaga({
	credentials: { email, password, displayName },
}: SignUp): SagaIterator {
	yield put(loading());
	try {
		const { user }: { user: FirebaseUser } = yield call(
			[auth, auth.createUserWithEmailAndPassword],
			email,
			password
		);

		const appUser = { email, uid: user.uid, displayName: displayName! };

		yield call(addUserToDatabase, appUser);
		yield put(signUpSuccess());
		yield call(putUserOnSignSuccess, appUser);
	} catch (error) {
		switch (error.code) {
			case 'auth/email-already-in-use':
				yield put(
					signUpFailure({
						message: 'This Email is Taken. try another one',
						label: 'email',
					})
				);
				break;

			case 'auth/weak-password':
				yield put(
					signUpFailure({ message: 'Weak Password', label: 'password' })
				);
				break;

			case 'auth/invalid-email':
				yield put(signUpFailure({ message: 'Invalid Email', label: 'email' }));
				break;

			default:
				yield put(
					signUpFailure({
						message: 'something went wrong. try again later',
						label: 'unknown',
					})
				);
		}
	}
}

function* getCurrentUserSaga(): SagaIterator {
	try {
		let user: FirebaseUser | User | null;
		let appUser: User | null;
		const userFromStorage = localStorage.getItem('user');
		if (userFromStorage) {
			user = JSON.parse(userFromStorage) as User;
			appUser = {
				email: user.email,
				displayName: user.displayName,
				uid: user.uid,
			};
		} else {
			user = (yield call(getCurrentUser)) as FirebaseUser | null;
			if (user) {
				appUser = {
					email: user.email!,
					displayName: user.displayName!,
					uid: user.uid,
				};
			} else {
				appUser = null;
			}
		}

		if (appUser) {
			yield fork(putUserOnSignSuccess, appUser);
		}
	} catch (error) {
		console.log(error);
	}
}

function* signInWithGoogleSaga(): SagaIterator {
	try {
		const {
			user: { email, uid, displayName },
		}: { user: FirebaseUser } = yield call(googleSignIn);
		const appUser: User = { email: email!, uid, displayName: displayName! };
		yield call(putUserOnSignSuccess, appUser);
	} catch (error) {
		console.log(error);
		yield put(
			signInFailure({
				message: 'something went wrong. try again later',
				label: 'unknown',
			})
		);
	}
}

function* emailSignInSaga({
	credentials: { email, password },
}: EmailSignIn): SagaIterator {
	yield put(loading());
	try {
		const { user }: { user: FirebaseUser } = yield call(
			[auth, auth.signInWithEmailAndPassword],
			email,
			password
		);
		const appUser: User = {
			email: user.email!,
			uid: user.uid,
			displayName: user.displayName!,
		};
		yield call(putUserOnSignSuccess, appUser);
	} catch (error) {
		switch (error.code) {
			case 'auth/wrong-password':
				yield put(
					signInFailure({ message: 'Wrong password', label: 'password' })
				);
				break;

			case 'auth/user-not-found':
				yield put(
					signInFailure({ message: "User Doesn't Exist", label: 'email' })
				);
				break;

			case 'auth/invalid-email':
				yield put(signInFailure({ message: 'Invalid Email', label: 'email' }));
				break;

			default:
				yield put(
					signInFailure({
						message: 'something went wrong. try again later',
						label: 'unknown',
					})
				);
		}
	}
}

function* signOutSaga(): SagaIterator {
	try {
		yield call([auth, auth.signOut]);
		localStorage.removeItem('user');
		yield put(signOutSuccess());
	} catch (error) {
		signInFailure({ message: 'Something Went Wrong', label: 'unknown' });
	}
}

function* onSignUpStartSaga(): SagaIterator {
	yield debounce(1000, SIGN_UP_START, signUpSaga);
}

function* onGetCurrentUserSaga(): SagaIterator {
	yield take(GET_CURRENT_USER);
	yield fork(getCurrentUserSaga);
}

function* onSignOutStartSaga(): SagaIterator {
	yield takeLatest(SIGN_OUT_START, signOutSaga);
}

function* onEmailSignInStartSaga(): SagaIterator {
	yield debounce(1000, EMAIL_SIGN_IN_START, emailSignInSaga);
}

function* onGoogleSignInStartSaga(): SagaIterator {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogleSaga);
}

export function* userSagas(): SagaIterator {
	yield all([
		call(onGoogleSignInStartSaga),
		call(onSignOutStartSaga),
		call(onEmailSignInStartSaga),
		call(onSignUpStartSaga),
		call(onGetCurrentUserSaga),
	]);
}
