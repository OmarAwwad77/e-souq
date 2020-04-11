import { AppState } from '../root.reducer';
import { createSelector } from 'reselect';

export const selectUserState = (state: AppState) => state.user;

export const selectUser = createSelector(
	[selectUserState],
	(userState) => userState.user
);

export const selectSignInError = createSelector(
	[selectUserState],
	(userState) => userState.signInError
);

export const selectSignUpError = createSelector(
	[selectUserState],
	(userState) => userState.signUpError
);

export const selectLoading = createSelector(
	[selectUserState],
	(userState) => userState.loading
);
