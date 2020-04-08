import {
	SIGN_IN_FAILURE,
	SIGN_IN_SUCCESS,
	SIGN_OUT_SUCCESS,
} from './user.types';
import { User } from './user.types';
import { UserActions } from './user.types';

type UserState = {
	user: null | User;
	error: string | null;
};

const initialState: UserState = {
	user: null,
	error: null,
};

const userReducer = (state = initialState, action: UserActions): UserState => {
	switch (action.type) {
		case SIGN_IN_SUCCESS:
			return {
				...state,
				user: action.user,
			};

		case SIGN_IN_FAILURE:
			return {
				...state,
				error: action.error,
			};

		case SIGN_OUT_SUCCESS:
			return {
				user: null,
				error: null,
			};

		default:
			return state;
	}
};

export default userReducer;
