import {
	ADD_CART_ITEM,
	REMOVE_CART_ITEM,
	DELETE_CART_ITEM,
	GET_STORAGE_CART_ITEMS,
} from './cart.types';
import { CartActions } from './cart.types';
import { CartItem } from './cart.types';
import { CollectionItem } from './cart.types';
import {
	updateCartItemsInStorageUtil,
	getStorageCartItemsUtil,
} from './cart.utils';

export const getStorageCartItems = (): CartActions => ({
	type: GET_STORAGE_CART_ITEMS,
	cartItems: getStorageCartItemsUtil(),
});

export const addCartItem = (item: CartItem | CollectionItem): CartActions => {
	updateCartItemsInStorageUtil('add', item);
	return {
		item,
		type: ADD_CART_ITEM,
	};
};

export const deleteCartItem = (id: number): CartActions => {
	updateCartItemsInStorageUtil('delete', id);
	return {
		type: DELETE_CART_ITEM,
		id,
	};
};

export const removeCartItem = (id: number): CartActions => {
	updateCartItemsInStorageUtil('remove', id);
	return {
		type: REMOVE_CART_ITEM,
		id,
	};
};
