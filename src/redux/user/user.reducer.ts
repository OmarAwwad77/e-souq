import {
	SIGN_IN_FAILURE,
	SIGN_IN_SUCCESS,
	SIGN_OUT_SUCCESS,
	LOADING,
	CLEAR_ERROR,
	SIGN_UP_FAILURE,
} from './user.types';
import { User, UserActions, UserError } from './user.types';

type UserState = {
	user: null | User;
	signInError: UserError | null;
	signUpError: UserError | null;
	loading: boolean;
};

const initialState: UserState = {
	user: null,
	signInError: null,
	signUpError: null,
	loading: false,
};

const userReducer = (state = initialState, action: UserActions): UserState => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};

		case SIGN_IN_SUCCESS:
			return {
				...state,
				user: action.user,
				loading: false,
			};

		case SIGN_IN_FAILURE:
			return {
				...state,
				signInError: action.signInError,
				loading: false,
			};

		case SIGN_UP_FAILURE:
			return {
				...state,
				signUpError: action.signUpError,
				loading: false,
			};

		case SIGN_OUT_SUCCESS:
			return {
				...state,
				user: null,
			};

		case CLEAR_ERROR:
			return {
				...state,
				signInError: null,
				signUpError: null,
			};

		default:
			return state;
	}
};

export default userReducer;
