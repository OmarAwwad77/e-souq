import CartActions from './cart/types/cart.actions';
export {
	addCartItem,
	removeCartItem,
	deleteCartItem,
} from './cart/cart.actions';

export type StoreActions = CartActions;
