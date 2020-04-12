export interface CollectionItem {
	id: number;
	name: string;
	price: number;
	url: string;
}

export interface CartItem extends CollectionItem {
	quantity: number;
	total: number;
}

export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';

export interface AddCartItemAction {
	type: typeof ADD_CART_ITEM;
	item: CollectionItem | CartItem;
}

export interface DeleteCartItem {
	type: typeof DELETE_CART_ITEM;
	id: number;
}

export interface RemoveCartItemAction {
	type: typeof REMOVE_CART_ITEM;
	id: number;
}

export type CartActions =
	| AddCartItemAction
	| RemoveCartItemAction
	| DeleteCartItem;
