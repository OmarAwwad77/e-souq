import React from 'react';

import {
	CartTotalWrapper,
	LineWrapper,
	Title,
	Button,
	Divider
} from './cart-total.styles';

interface CartTotalPropsType {
	total: number;
}

const CartTotal: React.FC<CartTotalPropsType> = props => {
	return (
		<CartTotalWrapper>
			<Title>Cart totals</Title>
			<LineWrapper>
				<span>subtotal</span> <span>$126.98</span>
			</LineWrapper>
			<LineWrapper>
				<span>Shipping</span>
				<span>
					<span style={{ fontWeight: 400 }}>flat rate:</span> $20
				</span>
			</LineWrapper>
			<Divider />
			<LineWrapper>
				<span>total</span> <span>$146.98</span>
			</LineWrapper>
			<Button>Proceed to checkout</Button>
		</CartTotalWrapper>
	);
};

export default CartTotal;
