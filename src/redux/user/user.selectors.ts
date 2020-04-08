import { AppState } from '../root.reducer';
import { createSelector } from 'reselect';

export const selectUserState = (state: AppState) => state.user;

export const selectUser = createSelector(
	[selectUserState],
	(userState) => userState.user
);
