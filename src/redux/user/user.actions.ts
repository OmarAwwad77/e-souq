import {
	GOOGLE_SIGN_IN_START,
	SIGN_IN_FAILURE,
	SIGN_IN_SUCCESS,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_START,
} from './user.types';
import { User } from './user.types';
import { UserActions } from './user.types';

export const googleSignIn = (): UserActions => ({
	type: GOOGLE_SIGN_IN_START,
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
