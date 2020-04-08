export interface User {
	email: string;
	id: string;
	displayName: string;
}

export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

interface GoogleSignIn {
	type: typeof GOOGLE_SIGN_IN_START;
}

interface SignInSuccess {
	type: typeof SIGN_IN_SUCCESS;
	user: User;
}

interface SignInFailure {
	type: typeof SIGN_IN_FAILURE;
	error: string;
}

interface SignOut {
	type: typeof SIGN_OUT_START;
}

interface SignOutSuccess {
	type: typeof SIGN_OUT_SUCCESS;
}

export type UserActions =
	| GoogleSignIn
	| SignInSuccess
	| SignInFailure
	| SignOut
	| SignOutSuccess;
