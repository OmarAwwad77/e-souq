import React from 'react';

import { CartWrapper, CartTitle } from './cart.styles';

import CartItem from '../cart-item/cart-item';

const skirtUrl =
	'https://mgana.la-studioweb.com/wp-content/uploads/2019/10/fashion-pro-15-1000x1200.jpg';

const vestUrl =
	'https://mgana.la-studioweb.com/wp-content/uploads/2019/10/fashion-pro-10-1000x1200.jpg';

const Cart = () => {
	return (
		<CartWrapper>
			<CartTitle>product</CartTitle>
			<CartTitle>price</CartTitle>
			<CartTitle>quantity</CartTitle>
			<CartTitle>subTotal</CartTitle>
			<CartItem
				url={skirtUrl}
				name='Tailored lapels wool coat'
				price={49.99}
				quantity={1}
				total={49.99}
			/>
			<CartItem
				url={vestUrl}
				name='Belt long jumpsuit'
				price={70}
				quantity={2}
				total={140}
			/>
		</CartWrapper>
	);
};

export default Cart;
