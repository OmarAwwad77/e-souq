import CartActionTypes from '../cart.actionTypes';
import CollectionItem from './CollectionItem';
import CartItem from './CartItem';

export interface AddCartItemAction {
	type: typeof CartActionTypes.addCartItem;
	item: CollectionItem | CartItem;
}

export interface DeleteCartItem {
	type: typeof CartActionTypes.deleteCartItem;
	id: number;
}

export interface RemoveCartItemAction {
	type: typeof CartActionTypes.removeCartItem;
	id: number;
}

type CartActions = AddCartItemAction | RemoveCartItemAction | DeleteCartItem;

export default CartActions;
