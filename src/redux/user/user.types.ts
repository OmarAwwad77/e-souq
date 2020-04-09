export interface User {
	email: string;
	uid: string;
	displayName: string;
}

export interface Credentials {
	email: string;
	password: string;
	displayName?: string;
}

export const SIGN_UP_START = 'SIGN_UP_START';
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

export interface SignUp {
	type: typeof SIGN_UP_START;
	credentials: Credentials;
}

export interface GoogleSignIn {
	type: typeof GOOGLE_SIGN_IN_START;
}

export interface EmailSignIn {
	type: typeof EMAIL_SIGN_IN_START;
	credentials: Credentials;
}

export interface SignInSuccess {
	type: typeof SIGN_IN_SUCCESS;
	user: User;
}

export interface SignInFailure {
	type: typeof SIGN_IN_FAILURE;
	error: string;
}

export interface SignOut {
	type: typeof SIGN_OUT_START;
}

export interface SignOutSuccess {
	type: typeof SIGN_OUT_SUCCESS;
}

export type UserActions =
	| GoogleSignIn
	| SignInSuccess
	| SignInFailure
	| SignOut
	| SignOutSuccess
	| EmailSignIn
	| SignUp;
