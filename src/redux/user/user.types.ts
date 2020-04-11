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

export interface UserError {
	message: string;
	label: string;
}

export const LOADING = 'LOADING';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

export interface loading {
	type: typeof LOADING;
}

export interface clearError {
	type: typeof CLEAR_ERROR;
}

export interface SignUp {
	type: typeof SIGN_UP_START;
	credentials: Credentials;
}

export interface SignUpSuccess {
	type: typeof SIGN_UP_SUCCESS;
}

export interface SignUpFailure {
	type: typeof SIGN_UP_FAILURE;
	signUpError: UserError;
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
	signInError: UserError;
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
	| SignUp
	| SignUpSuccess
	| SignUpFailure
	| loading
	| clearError;
