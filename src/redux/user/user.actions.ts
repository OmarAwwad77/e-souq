import {
	LOADING,
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
	UserError,
	CLEAR_ERROR,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
	GET_CURRENT_USER,
} from './user.types';

export const loading = (): UserActions => ({
	type: LOADING,
});

export const getCurrentUser = (): UserActions => ({
	type: GET_CURRENT_USER,
});

export const clearError = (): UserActions => ({
	type: CLEAR_ERROR,
});

export const signUp = (credentials: Credentials): UserActions => ({
	type: SIGN_UP_START,
	credentials,
});

export const signUpSuccess = (): UserActions => ({
	type: SIGN_UP_SUCCESS,
});

export const signUpFailure = (signUpError: UserError): UserActions => ({
	type: SIGN_UP_FAILURE,
	signUpError,
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

export const signInFailure = (signInError: UserError): UserActions => ({
	type: SIGN_IN_FAILURE,
	signInError,
});

export const signOut = (): UserActions => ({
	type: SIGN_OUT_START,
});

export const signOutSuccess = (): UserActions => ({
	type: SIGN_OUT_SUCCESS,
});
