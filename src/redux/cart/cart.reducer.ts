import {
	GET_STORAGE_CART_ITEMS,
	ADD_CART_ITEM,
	REMOVE_CART_ITEM,
	DELETE_CART_ITEM,
} from './cart.types';
import { CartItem } from './cart.types';
import { CartActions } from './cart.types';
import {
	addCartItemUtil,
	deleteCartItemUtil,
	removeCartItemUtil,
} from './cart.utils';

export const initialState: CartItem[] = [];

const cartReducer = (
	state = initialState,
	action: CartActions
): typeof initialState => {
	switch (action.type) {
		case GET_STORAGE_CART_ITEMS:
			return action.cartItems;
		case ADD_CART_ITEM:
			return addCartItemUtil(state, action.item);

		case REMOVE_CART_ITEM:
			return removeCartItemUtil(state, action.id);

		case DELETE_CART_ITEM:
			return deleteCartItemUtil(state, action.id);

		default:
			return state;
	}
};

export default cartReducer;
