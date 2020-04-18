import React from 'react';

import {
	CartTotalWrapper as OrderWrapper,
	Title,
	Divider,
	LineWrapper,
	Button,
} from '../cart/cart-total/cart-total.styles';
import { Link } from '../nav-items/nav-items.styles';
import { CartItem } from '../../redux/cart/cart.types';
import OrderItem from './order-item/order-item';
import StripeButton from '../stripe-button/stripe-button';

interface OwnProps {
	cartItems: CartItem[];
	cartTotal: number;
	flatRate: number;
	canOrder: boolean;
}
type Props = OwnProps;

const Order: React.FC<Props> = ({
	cartItems,
	cartTotal,
	flatRate,
	canOrder,
}) => {
	return (
		<OrderWrapper style={{ height: '55rem' }}>
			<Title>Your Order</Title>
			<Divider />
			<LineWrapper>
				<span>product</span>
				<span>subtotal</span>
			</LineWrapper>
			<Divider />
			{cartItems.map(({ name, id, quantity, total }) => (
				<OrderItem key={id} name={name} quantity={quantity} total={total} />
			))}
			<LineWrapper>
				<span>subtotal</span>
				<span>${cartTotal}</span>
			</LineWrapper>
			<Divider />
			<LineWrapper>
				<span>shipping</span>
				<span>flat rate: ${flatRate}</span>
			</LineWrapper>
			<Divider />
			<LineWrapper>
				<span>total</span>
				<span style={{ fontWeight: 700 }}>
					${(cartTotal + flatRate).toFixed(2)}
				</span>
			</LineWrapper>
			<Divider />
			<Link to='/cart'>
				<Button>View Cart</Button>
			</Link>
			<StripeButton
				price={+(cartTotal + flatRate).toFixed(2)}
				canOrder={canOrder}
			/>
		</OrderWrapper>
	);
};

export default Order;
