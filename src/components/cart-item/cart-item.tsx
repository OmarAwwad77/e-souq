import React from 'react';

import {
	CartItemProduct,
	Remove,
	Image,
	Name,
	Price,
	Quantity
} from './cart-item.styles';

interface CartItemType {
	url: string;
	name: string;
	price: number;
	quantity: number;
	total: number;
}

const CartItem: React.FC<CartItemType> = props => {
	return (
		<>
			<CartItemProduct>
				<Remove />
				<Image src={props.url} />
				<Name>{props.name}</Name>
			</CartItemProduct>
			<span>${props.price}</span>
			<Quantity>{props.quantity}</Quantity>
			<Price>${props.total}</Price>
		</>
	);
};

export default CartItem;
