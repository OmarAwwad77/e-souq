import { initialState } from './cart.reducer';
import { CartItem } from './cart.types';
import { CollectionItem } from './cart.types';

export const addCartItemUtil = (
	state: typeof initialState,
	itemToAdd: CartItem | CollectionItem
): typeof initialState => {
	const index = state.findIndex((item) => item.id === itemToAdd.id);

	if (index === -1) {
		return [
			...state,
			{
				...itemToAdd,
				quantity: 1,
				total: itemToAdd.price,
			},
		];
	}

	return state.map((item) => {
		return item.id === itemToAdd.id
			? {
					...state[index],
					quantity: state[index].quantity + 1,
					total: (state[index].quantity + 1) * state[index].price,
			  }
			: item;
	});
};

export const deleteCartItemUtil = (
	state: typeof initialState,
	id: number
): typeof initialState => {
	return state.filter((item) => item.id !== id);
};

export const removeCartItemUtil = (
	state: typeof initialState,
	id: number
): typeof initialState => {
	const itemToUpdate = state.find((item) => item.id === id);

	if (itemToUpdate?.quantity! >= 2) {
		return state.map((item) => {
			return item.id === id
				? {
						...itemToUpdate!,
						quantity: itemToUpdate?.quantity! - 1,
						total: (itemToUpdate?.quantity! - 1) * itemToUpdate?.price!,
				  }
				: item;
		});
	}
	return deleteCartItemUtil(state, id);
};

export const updateCartItemsInStorageUtil = (
	action: 'add' | 'remove' | 'delete',
	payload: number | CartItem | CollectionItem
) => {
	let cartItemsFromStorage:
		| typeof initialState
		| string
		| null = localStorage.getItem('cart');
	let updatedStorageCartItems: typeof initialState;

	switch (action) {
		case 'add':
			if (cartItemsFromStorage) {
				cartItemsFromStorage = JSON.parse(
					cartItemsFromStorage
				) as typeof initialState;
			} else {
				cartItemsFromStorage = [];
			}
			updatedStorageCartItems = addCartItemUtil(
				cartItemsFromStorage,
				payload as CartItem | CollectionItem
			);
			break;

		case 'remove':
			if (cartItemsFromStorage) {
				cartItemsFromStorage = JSON.parse(
					cartItemsFromStorage
				) as typeof initialState;
			} else {
				cartItemsFromStorage = [];
			}
			updatedStorageCartItems = removeCartItemUtil(
				cartItemsFromStorage,
				payload as number
			);
			break;

		case 'delete':
			if (cartItemsFromStorage) {
				cartItemsFromStorage = JSON.parse(
					cartItemsFromStorage
				) as typeof initialState;
			} else {
				cartItemsFromStorage = [];
			}
			updatedStorageCartItems = deleteCartItemUtil(
				cartItemsFromStorage,
				payload as number
			);
			break;
	}

	localStorage.setItem('cart', JSON.stringify(updatedStorageCartItems));
};

export const getStorageCartItemsUtil = () => {
	const cartItemsFromStorage: string | null = localStorage.getItem('cart');

	return cartItemsFromStorage
		? (JSON.parse(cartItemsFromStorage) as typeof initialState)
		: [];
};
