import { CartActions } from './cart/cart.types';
import { UserActions } from './user/user.types';
export {
	getStorageCartItems,
	addCartItem,
	removeCartItem,
	deleteCartItem,
} from './cart/cart.actions';
export {
	loading,
	getCurrentUser,
	signUp,
	googleSignIn,
	emailSignIn,
	signInSuccess,
	signInFailure,
	signOut,
	signOutSuccess,
	clearError,
	signUpFailure,
	signUpSuccess,
} from './user/user.actions';

export type StoreActions = CartActions | UserActions;
