import { all, takeLatest, put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GOOGLE_SIGN_IN_START, SIGN_OUT_START } from './user.types';
import { signInSuccess, signOutSuccess } from '../root.actions';
import firebase, {
	googleSignIn,
	User,
	auth,
} from '../../firebase/firebase.utils';

function* signInWithGoogle(): SagaIterator {
	try {
		const {
			user: { email, uid, displayName },
		}: { user: User } = yield call(googleSignIn);
		yield put(
			signInSuccess({ email: email!, id: uid, displayName: displayName! })
		);
	} catch (error) {}
}

function* signOut(): SagaIterator {
	try {
		console.log('hey there');
		yield call([auth, auth.signOut]);
		yield put(signOutSuccess());
	} catch (error) {
		console.log(error);
	}
}

function* onSignOut(): SagaIterator {
	yield takeLatest(SIGN_OUT_START, signOut);
}

function* onGoogleSignInStart(): SagaIterator {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas(): SagaIterator {
	yield all([call(onGoogleSignInStart), call(onSignOut)]);
}
