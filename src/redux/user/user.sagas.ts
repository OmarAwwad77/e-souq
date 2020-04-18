import { all, takeLatest, put, call, debounce } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
	SIGN_UP_START,
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
} from '../../firebase/firebase.utils';

function* putUserOnSignSuccess(user: User): SagaIterator {
	const { email, uid, displayName } = user;
	yield put(
		signInSuccess({ email: email!, uid: uid, displayName: displayName! })
	);
}

function* signUp({
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

function* signInWithGoogle(): SagaIterator {
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

function* emailSignIn({
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

function* signOut(): SagaIterator {
	try {
		yield call([auth, auth.signOut]);
		yield put(signOutSuccess());
	} catch (error) {
		signInFailure({ message: 'Something Went Wrong', label: 'unknown' });
	}
}

function* onSignUpStart(): SagaIterator {
	yield debounce(1000, SIGN_UP_START, signUp);
}

function* onSignOutStart(): SagaIterator {
	yield takeLatest(SIGN_OUT_START, signOut);
}

function* onEmailSignInStart(): SagaIterator {
	yield debounce(1000, EMAIL_SIGN_IN_START, emailSignIn);
}

function* onGoogleSignInStart(): SagaIterator {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas(): SagaIterator {
	yield all([
		call(onGoogleSignInStart),
		call(onSignOutStart),
		call(onEmailSignInStart),
		call(onSignUpStart),
	]);
}
