import CartActionTypes from './cart.actionTypes';
import CartItem from './types/CartItem';
import CollectionItem from './types/CollectionItem';
import CartActions from './types/cart.actions';

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
		case CartActionTypes.addCartItem:
			return addCartItem(state, action.item);

		case CartActionTypes.removeCartItem:
			return removeCartItem(state, action.id);

		case CartActionTypes.deleteCartItem:
			return deleteCartItem(state, action.id);

		default:
			return state;
	}
};

export default cartReducer;
