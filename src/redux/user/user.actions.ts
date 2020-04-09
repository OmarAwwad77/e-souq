import {
	SIGN_UP_START,
	GOOGLE_SIGN_IN_START,
	EMAIL_SIGN_IN_START,
	SIGN_IN_FAILURE,
	SIGN_IN_SUCCESS,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_START,
	User,
	Credentials,
	UserActions,
} from './user.types';

export const signUp = (credentials: Credentials): UserActions => ({
	type: SIGN_UP_START,
	credentials,
});

export const googleSignIn = (): UserActions => ({
	type: GOOGLE_SIGN_IN_START,
});

export const emailSignIn = (credentials: Credentials): UserActions => ({
	type: EMAIL_SIGN_IN_START,
	credentials,
});

export const signInSuccess = (user: User): UserActions => ({
	type: SIGN_IN_SUCCESS,
	user,
});

export const signInFailure = (error: string): UserActions => ({
	type: SIGN_IN_FAILURE,
	error,
});

export const signOut = (): UserActions => ({
	type: SIGN_OUT_START,
});

export const signOutSuccess = (): UserActions => ({
	type: SIGN_OUT_SUCCESS,
});
