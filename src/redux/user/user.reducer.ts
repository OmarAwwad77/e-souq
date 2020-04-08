import UserActions from './types/user.actions';
import UserActionTypes from './user.actionTypes';
import User from './types/User';

type InitialState = {
	user: null | User;
	error: string | null;
};

const initialState: InitialState = {
	user: null,
	error: null,
};

const userReducer = (
	state = initialState,
	action: UserActions
): InitialState => {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				user: action.user,
			};

		case UserActionTypes.SIGN_IN_FAILURE:
			return {
				...state,
				error: action.error,
			};

		default:
			return state;
	}
};

export default userReducer;
