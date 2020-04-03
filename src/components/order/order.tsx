import React from 'react';

import {
	CartTotalWrapper as OrderWrapper,
	Title,
	Divider,
	LineWrapper,
	Button
} from '../cart/cart-total/cart-total.styles';

const Order = () => {
	return (
		<OrderWrapper style={{ height: '55rem' }}>
			<Title>Your Order</Title>
			<Divider />
			<LineWrapper light>
				<span>product</span>
				<span>subtotal</span>
			</LineWrapper>
			<Divider />
			<LineWrapper light>
				<span>
					Belt long jumpsuitfgfg <span style={{ fontWeight: 700 }}>× 1</span>
				</span>
				<span>$49.99</span>
			</LineWrapper>
			<Divider />
			<LineWrapper light>
				<span>subtotal</span>
				<span>$129.98</span>
			</LineWrapper>
			<Divider />
			<LineWrapper light>
				<span>shipping</span>
				<span>flat rate: $29.98</span>
			</LineWrapper>
			<Divider />
			<LineWrapper light>
				<span>total</span>
				<span style={{ fontWeight: 700 }}>$229.98</span>
			</LineWrapper>
			<Divider />
			<Button>View Cart</Button>
			<Button style={{ marginTop: '0' }}>Place Order</Button>
		</OrderWrapper>
	);
};

export default Order;
