import CartActionTypes from './cart.actionTypes';
import CartActions from './types/cart.actions';
import CollectionItem from './types/CollectionItem';
import CartItem from './types/CartItem';

export const addCartItem = (item: CollectionItem | CartItem): CartActions => ({
	type: CartActionTypes.addCartItem,
	item,
});

export const deleteCartItem = (id: number): CartActions => ({
	type: CartActionTypes.deleteCartItem,
	id,
});

export const removeCartItem = (id: number): CartActions => ({
	type: CartActionTypes.removeCartItem,
	id,
});
