import {
	ADD_CART_ITEM,
	REMOVE_CART_ITEM,
	DELETE_CART_ITEM,
} from './cart.types';
import { CartActions } from './cart.types';
import { CartItem } from './cart.types';
import { CollectionItem } from './cart.types';

export const addCartItem = (item: CollectionItem | CartItem): CartActions => ({
	type: ADD_CART_ITEM,
	item,
});

export const deleteCartItem = (id: number): CartActions => ({
	type: DELETE_CART_ITEM,
	id,
});

export const removeCartItem = (id: number): CartActions => ({
	type: REMOVE_CART_ITEM,
	id,
});
