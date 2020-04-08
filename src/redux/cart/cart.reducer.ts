import {
	ADD_CART_ITEM,
	REMOVE_CART_ITEM,
	DELETE_CART_ITEM,
} from './cart.types';
import { CartItem } from './cart.types';
import { CollectionItem } from './cart.types';
import { CartActions } from './cart.types';

const initialState: CartItem[] = [];

const addCartItem = (
	state: typeof initialState,
	itemToAdd: CollectionItem | CartItem
) => {
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

const deleteCartItem = (state: typeof initialState, id: number) => {
	return state.filter((item) => item.id !== id);
};

const removeCartItem = (state: typeof initialState, id: number) => {
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
	return deleteCartItem(state, id);
};

const cartReducer = (
	state = initialState,
	action: CartActions
): typeof initialState => {
	switch (action.type) {
		case ADD_CART_ITEM:
			return addCartItem(state, action.item);

		case REMOVE_CART_ITEM:
			return removeCartItem(state, action.id);

		case DELETE_CART_ITEM:
			return deleteCartItem(state, action.id);

		default:
			return state;
	}
};

export default cartReducer;
