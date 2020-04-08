import UserActionTypes from './user.actionTypes';
import UserActions from './types/user.actions';
import User from './types/User';

export const googleSignIn = (): UserActions => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user: User): UserActions => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	user,
});

export const signInFailure = (error: string): UserActions => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	error,
});
