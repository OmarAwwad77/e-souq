import React from 'react';

import Cart from '../../components/cart/cart';
import CartTotal from '../../components/cart/cart-total/cart-total';

import {
	PageContent,
	PageImage,
	PageTitle,
	PageWrapper,
} from './cart.page.styles';

const CartPage: React.FC = () => {
	return (
		<PageWrapper>
			<PageImage>
				<PageTitle>Cart</PageTitle>
			</PageImage>
			<PageContent>
				<Cart />
				<CartTotal />
			</PageContent>
		</PageWrapper>
	);
};

export default CartPage;
