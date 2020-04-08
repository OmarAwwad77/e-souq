import UserActionTypes from '../user.actionTypes';
import User from './User';

interface GoogleSignIn {
	type: typeof UserActionTypes.GOOGLE_SIGN_IN_START;
}

interface SignInSuccess {
	type: typeof UserActionTypes.SIGN_IN_SUCCESS;
	user: User;
}

interface SignInFailure {
	type: typeof UserActionTypes.SIGN_IN_FAILURE;
	error: string;
}
type UserActions = GoogleSignIn | SignInSuccess | SignInFailure;

export default UserActions;
