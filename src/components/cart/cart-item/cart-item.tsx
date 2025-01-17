import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { StoreActions } from '../../../redux/root.actions';
import { CartActions } from '../../../redux/cart/cart.types';
import {
	addCartItem,
	removeCartItem,
	deleteCartItem,
} from '../../../redux/root.actions';
import { CartItem as CartItemType } from '../../../redux/cart/cart.types';

import {
	CartItemProduct,
	ProductImgName,
	Remove,
	Image,
	Price,
	Name,
	SubTotal,
	Quantity,
	Plus,
	Minus,
} from './cart-item.styles';

interface StoreProps {
	addCartItem: (item: CartItemType) => CartActions;
	removeCartItem: typeof removeCartItem;
	deleteCartItem: typeof deleteCartItem;
}
type OwnProps = CartItemType;
type Props = OwnProps & StoreProps;

const CartItem: React.FC<Props> = ({
	addCartItem,
	removeCartItem,
	deleteCartItem,
	children,
	...item
}) => {
	return (
		<>
			<CartItemProduct>
				<Remove
					onClick={() => {
						deleteCartItem(item.id);
					}}
				/>
				{/* <ProductImgName> */}
				<Image src={item.url} />
				<Name>{item.name}</Name>
				{/* </ProductImgName> */}
			</CartItemProduct>
			<Price>${item.price}</Price>
			<Quantity>
				<Plus
					onClick={() => {
						addCartItem(item);
					}}
				>
					&#43;
				</Plus>
				{item.quantity}
				<Minus
					onClick={() => {
						removeCartItem(item.id);
					}}
				>
					&#8722;
				</Minus>
			</Quantity>
			<SubTotal>${item.total}</SubTotal>
		</>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<StoreActions>) => ({
	addCartItem: (item: CartItemType) => dispatch(addCartItem(item)),
	removeCartItem: (id: number) => dispatch(removeCartItem(id)),
	deleteCartItem: (id: number) => dispatch(deleteCartItem(id)),
});

export default connect(null, mapDispatchToProps)(CartItem);
